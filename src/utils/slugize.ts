/// Copied from "hexojs/hexo-util"

import { escapeDiacritic } from './escape_diacritic'
import { escapeRegExp } from './escape_regexp'

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g

export const slugize = (str: string) => {
  const separator = '-'
  const escapedSep = escapeRegExp(separator)

  const result = escapeDiacritic(str)
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, separator)
    // Remove continous separators
    .replace(new RegExp(`${escapedSep}{2,}`, 'g'), separator)
    // Remove prefixing and trailing separtors
    .replace(new RegExp(`^${escapedSep}+|${escapedSep}+$`, 'g'), '')

  return result.toLowerCase()
}
