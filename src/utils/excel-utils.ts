import { read, utils } from 'xlsx'

type EHeader = {
  rawKey: string
  fromKey: string
  toKey: string
}

export type EOptions = {
  extractType: 'table' | 'simple' | 'dynamic'
  fixedRow: any
  tables: any
  ignoreValue: string[]
}

export async function extractExcel(file: File, ops: EOptions) {
  const excelJson = await parseExcel(file, ops)
  const rs: any[] = []
  for (const sheetName in excelJson) {
    const sheetData = excelJson[sheetName]
    if (ops && ops.extractType === 'table') {
      const processingData: any = {}
      if (sheetData) {
        for (const cfg of ops.fixedRow) {
          const rowData = sheetData.find((x: any) => x.__rowNum__ == cfg.row)
          if (rowData) {
            const value = rowData[Object.keys(rowData)[cfg.position - 1]]
            if (value !== null && value !== undefined) {
              processingData[cfg.key] = value
            }
          }
        }

        for (const cfg of ops.tables) {
          let rowStart = null
          let headers = []
          const sheetTmp = []
          for (const elm of sheetData) {
            let elmIndex = 0
            for (const key in elm) {
              elmIndex++
              const val = elm[key]

              if (val && val == cfg.title.trim() && elmIndex === 1) {
                rowStart = elm.__rowNum__ + 1
              }
              if (elm.__rowNum__ === rowStart) {
                const col = cfg.cols.find((x: EHeader) => x.fromKey === val)
                if (col) {
                  const header: EHeader = {
                    rawKey: key,
                    fromKey: val,
                    toKey: col.toKey
                  }
                  headers.push(header)
                }
              }
            }

            if (headers.length > 0 && elm.__rowNum__ > rowStart) {
              if (Object.keys(elm).length === 0) {
                headers = []
                rowStart = 0
              }
              // Remapping key-val
              const rowData: any = {}
              for (const key in elm) {
                const val = elm[key]
                const col = headers.find((x: EHeader) => x.rawKey === key)
                if (col && val && (!ops.ignoreValue || !ops.ignoreValue.includes(val))) {
                  rowData[col.toKey] = val
                }
              }
              if (Object.keys(rowData).length > 0) {
                sheetTmp.push({ ...rowData })
              }
            }
          }

          if (sheetTmp.length > 0) {
            processingData[cfg.key] = [...sheetTmp]
          }
        }
      }
      // Push
      rs.push({
        sheetName,
        raw: [...sheetData],
        data: { ...processingData }
      })
    } else {
      rs.push({
        sheetName,
        data: [...sheetData]
      })
    }
  }
  return rs
}

async function parseExcel(file: File, ops: EOptions) {
  const buffer = await file.arrayBuffer()
  const workbook = read(buffer, {
    type: 'binary'
  })

  const rs: any = {}

  for (const sheetName of workbook.SheetNames) {
    const blankrows = ops && ops.extractType === 'table' ? true : false
    const objArrayString = utils.sheet_to_json(workbook.Sheets[sheetName], { blankrows })
    rs[sheetName] = objArrayString
  }

  return rs
}
