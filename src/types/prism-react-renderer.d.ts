declare module 'prism-react-renderer' {
  import React, { CSSProperties } from 'react'

  export interface ICode {
    codeString: string
    language: string

    [x: string]: any
  }

  export interface IHighlight {
    className: string
    style: CSSProperties | undefined
    tokens: Array<string[]>
    getLineProps: (...args: any) => any
    getTokenProps: (...args: any) => any
  }

  export default class Highlight extends React.Component<ICode> {}

  export const defaultProps: any
}

declare module 'prism-react-renderer/themes/dracula' {
  export const theme: Object
}