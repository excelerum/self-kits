import { clipboard } from 'electron'

export function copyToClipboard(value: any) {
  if (value) {
    clipboard.writeText(String(value))
  }
}
