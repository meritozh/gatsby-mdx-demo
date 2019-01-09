import { preToCodeBlock } from 'mdx-utils'
import { MDXProvider } from '@mdx-js/tag'
import { Code } from '../components/code'
import React from 'react'

const components = {
  pre: (preProps: React.HTMLAttributes<any>) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}

type T = {
  element: React.ReactElement<any>
}

export const wrapRootElement = ({ element }: T) => {
  <MDXProvider components={components}>{element}</MDXProvider>
}
