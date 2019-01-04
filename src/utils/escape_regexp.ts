/// Copied from "hexojs/hexo-util"

export const escapeRegExp = (str: string) => {
  // http://stackoverflow.com/a/6969486
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&')
}
