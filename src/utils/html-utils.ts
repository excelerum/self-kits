import * as cheerio from 'cheerio'

export type TableToJsonOptions = {
  useFirstRowForHeadings?: boolean // Use the first row as header [default=false]
  stripHtmlFromHeadings?: boolean // Strip all HTML from headings [default=true]
  stripHtmlFromCells?: boolean // Strip HTML from cells [default=true]
  stripHtml?: boolean | null // Strip off HTML [default=null] if set true stripHtmlFromHeadings and stripHtmlFromCells will also be true
  forceIndexAsNumber?: boolean // Force the index to be used as number [default=false]
  countDuplicateHeadings?: boolean // If given a _<NUMBER> will be added to the duplicate key [default=false]
  ignoreColumns?: number[] | null // {Array} Array of column indices to ignored [default=null]
  onlyColumns?: number[] | null // {Array} Array of column indices to be used. Overrides ignoreColumn [default=null]
  ignoreHiddenRows?: boolean // Ignoring hidden rows [default=true]
  id?: string[] | null // string of an id [default=null]
  headings?: string[] | null // {Array} Array of Strings to be used as headings [default=null]
  containsClasses?: string[] | null // {Array} Array of classes to find a specific table [default=null]
  limitrows?: number | null // {Integer} Integer that limits the result of all rows to a given amount of data [default=null]
  fetchOptions?: RequestInit
}

export type CallbackFunction = (conversionResult: any) => any

export class Tabletojson {
  static convert(
    html: string,
    options: TableToJsonOptions = {
      useFirstRowForHeadings: false,
      stripHtmlFromHeadings: true,
      stripHtmlFromCells: true,
      stripHtml: null,
      forceIndexAsNumber: false,
      countDuplicateHeadings: true,
      ignoreColumns: null,
      onlyColumns: null,
      ignoreHiddenRows: true,
      headings: null,
      containsClasses: null,
      id: null,
      limitrows: null
    }
  ): any[] {
    options = Object.assign(
      {
        useFirstRowForHeadings: false,
        stripHtmlFromHeadings: true,
        stripHtmlFromCells: true,
        stripHtml: null,
        forceIndexAsNumber: false,
        countDuplicateHeadings: true,
        ignoreColumns: null,
        onlyColumns: null,
        ignoreHiddenRows: true,
        headings: null,
        containsClasses: null,
        id: null,
        limitrows: null
      },
      options
    )

    if (options.stripHtml === true) {
      options.stripHtmlFromHeadings = true
      options.stripHtmlFromCells = true
    } else if (options.stripHtml === false) {
      options.stripHtmlFromHeadings = false
      options.stripHtmlFromCells = false
    }

    const jsonResponse: any[] = []
    let suffix

    const $ = cheerio.load(html)

    let additionalSelectors = options.containsClasses ? `.${options.containsClasses.join('.')}` : ''
    additionalSelectors = options.id ? `${additionalSelectors}#${options.id}` : ''

    $(`table${additionalSelectors}`).each((_i, table) => {
      const tableAsJson: any[] = []
      const alreadySeen: any = {}
      // Get column headings
      // @fixme Doesn't support vertical column headings.
      // @todo Try to support badly formated tables.
      const columnHeadings: string[] = []

      let trs: cheerio.Cheerio<any> = $(table).find('tr')

      if (options.useFirstRowForHeadings) {
        trs = $(trs[0])
      }
      let headingsCounter: number = 0
      // Use headings for objects key evaluation
      trs.each((_index: number, row: cheerio.Element) => {
        const cells: cheerio.Cheerio<any> = options.useFirstRowForHeadings ? $(row).find('td, th') : $(row).find('th')
        cells.each((j: number, cell: cheerio.Element) => {
          if (options.onlyColumns && !options.onlyColumns.includes(j)) return
          if (options.ignoreColumns && !options.onlyColumns && options.ignoreColumns.includes(j)) return
          let value: string = ''

          if (options.headings) {
            value = options.headings[headingsCounter++]
          } else {
            const cheerioCell: cheerio.Cheerio<any> = $(cell)
            const cheerioCellText: string = cheerioCell.text()
            const cheerioCellHtml: string | null = cheerioCell.html()

            value = options.stripHtmlFromHeadings
              ? cheerioCellText.trim()
              : cheerioCellHtml
                ? cheerioCellHtml.trim()
                : ''
          }

          const seen: any = alreadySeen[value]
          if (seen && options.countDuplicateHeadings) {
            suffix = ++alreadySeen[value]
            columnHeadings[j] = value !== '' ? `${value}_${suffix}` : `${j}`
          } else {
            alreadySeen[value] = 1
            columnHeadings[j] = value
          }
        })
      })

      let rowspans: any[] = []

      // Fetch each row
      $(table)
        .find('tr')
        .each(function (i, row) {
          const rowAsJson: any = {}

          function setColumn(j: number, content: string) {
            if (columnHeadings[j] && !options.forceIndexAsNumber) {
              rowAsJson[columnHeadings[j]] = content
            } else {
              rowAsJson[j] = content
            }
          }

          // Add content from rowspans
          rowspans.forEach((rowspan: any, index: number) => {
            if (!rowspan) return

            setColumn(index, rowspan.content)

            rowspan.value--
          })
          const nextrowspans: any[] = [...rowspans]

          const cells: cheerio.Cheerio<any> = options.useFirstRowForHeadings ? $(row).find('td, th') : $(row).find('td')
          cells.each((j: number, cell: cheerio.Element) => {
            // ignoreHiddenRows
            if (options.ignoreHiddenRows) {
              const style: string | undefined = $(row).attr('style')
              if (style) {
                const m = style.match(/.*display.*:.*none.*/g)
                if (m && m.length > 0) return
              }
            }

            // Apply rowspans offsets
            let aux: number = j
            j = 0
            do {
              while (rowspans[j]) j++
              while (aux && !rowspans[j]) {
                j++
                aux--
              }
            } while (aux)

            if (options.onlyColumns && !options.onlyColumns.includes(j)) return
            if (options.ignoreColumns && !options.onlyColumns && options.ignoreColumns.includes(j)) return

            const cheerioCell: cheerio.Cheerio<any> = $(cell)
            const cheerioCellText: string = cheerioCell.text()
            const cheerioCellHtml: string | null = cheerioCell.html()
            const cheerioCellRowspan: string | undefined = cheerioCell.attr('rowspan')

            const content: string = options.stripHtmlFromCells
              ? cheerioCellText.trim()
              : cheerioCellHtml
                ? cheerioCellHtml.trim()
                : ''

            setColumn(j, content)

            // Check rowspan
            const value: number = cheerioCellRowspan ? parseInt(cheerioCellRowspan, 10) - 1 : 0
            if (value > 0) nextrowspans[j] = { content, value }
          })

          rowspans = nextrowspans
          rowspans.forEach((rowspan: any, index: number) => {
            if (rowspan && rowspan.value === 0) rowspans[index] = null
          })

          // Skip blank rows
          if (JSON.stringify(rowAsJson) !== '{}') tableAsJson.push(rowAsJson)

          if (options.limitrows && i === options.limitrows) {
            return false
          }
        })

      // Add the table to the response
      const dataContained: boolean = tableAsJson.length > 0
      const pushToJsonResult: boolean = Array.isArray(tableAsJson) && dataContained
      if (!pushToJsonResult) {
        return true
      }
      jsonResponse.push(tableAsJson)
    })

    return jsonResponse
  }

  /**
   * Convert an HTML Page for a given URL
   * @param url URL to be called
   * @param callbackFunctionOrOptions {Object} Options for html conversion
   * @param callbackFunctionOrOptions.useFirstRowForHeadings Use the first row as header [default=false]
   * @param callbackFunctionOrOptions.stripHtmlFromHeadings Strip all HTML from headings [default=true]
   * @param callbackFunctionOrOptions.stripHtmlFromCells Strip HTML from cells [default=true]
   * @param callbackFunctionOrOptions.stripHtml Strip off HTML [default=null] if set true stripHtmlFromHeadings and stripHtmlFromCells will also be true
   * @param callbackFunctionOrOptions.forceIndexAsNumber Force the index to be used as number [default=false]
   * @param callbackFunctionOrOptions.countDuplicateHeadings If given a _<NUMBER> will be added to the duplicate key [default=false]
   * @param callbackFunctionOrOptions.ignoreColumns {Array} Array of column indices to ignored [default=null]
   * @param callbackFunctionOrOptions.onlyColumns {Array} Array of column indices to be used. Overrides ignoreColumn [default=null]
   * @param callbackFunctionOrOptions.ignoreHiddenRows Ignoring hidden rows [default=true]
   * @param callbackFunctionOrOptions.headings {Array} Array of Strings to be used as headings [default=null]
   * @param callbackFunctionOrOptions.headings {Array} Array of classes to find a specific table [default=null]
   * @param callbackFunctionOrOptions.limitrows {Integer} Integer that limits the result of all rows to a given amount of data [default=null]
   * @param callbackFunctionOrOptions.request Options to be passed to request object
   * @param callbackFunction Callback function to be called when the conversion finished
   * @return {Promise<*>} Promise containing the result
   */
  static async convertUrl(
    url: string,
    callbackFunctionOrOptions?: TableToJsonOptions | CallbackFunction,
    callbackFunction?: CallbackFunction
  ): Promise<any> {
    let options: TableToJsonOptions
    let fetchOptions: RequestInit

    if (callbackFunction && typeof callbackFunction === 'function' && typeof callbackFunctionOrOptions === 'object') {
      // If both options and callback passed
      options = callbackFunctionOrOptions
      // If you need to pass in options for request (proxy)
      // add them to callbackFunctionOrOptions.request
      fetchOptions = options.fetchOptions || {}

      // Use a callback (if passed)
      const result = await fetch(url, fetchOptions)
      const resultMimetype = result.headers.get('content-type')
      if (resultMimetype && !resultMimetype.includes('text/')) {
        throw new Error('Tabletojson can just handle text/** mimetypes')
      }
      return callbackFunction.call(this, Tabletojson.convert(await result.text(), options))
    } else if (typeof callbackFunctionOrOptions === 'function') {
      // Use a callback (if passed)
      const result = await fetch(url)
      const resultMimetype = result.headers.get('content-type')
      if (resultMimetype && !resultMimetype.includes('text/')) {
        throw new Error('Tabletojson can just handle text/** mimetypes')
      }
      return callbackFunctionOrOptions.call(this, Tabletojson.convert(await result.text()))
    } else {
      // If neither argument is callback, return a promise
      options = callbackFunctionOrOptions || {}
      // If you need to pass in options for request (proxy)
      // add them to callbackFunctionOrOptions.request
      fetchOptions = options.fetchOptions || {}
      const result = await fetch(url)
      const resultMimetype = result.headers.get('content-type')
      if (resultMimetype && !resultMimetype.includes('text/')) {
        throw new Error('Tabletojson can just handle text/** mimetypes')
      }
      return Tabletojson.convert(await result.text(), options)
    }
  }
}
export { Tabletojson as tabletojson }