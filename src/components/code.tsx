import React from 'react'
import Highlight, {
  defaultProps,
  IHighlight,
  ICode,
} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export const Code: React.FunctionComponent<ICode> = ({
  codeString,
  language,
  ...props
}) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }: IHighlight) => {
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            })}
          </pre>
        }}
      </Highlight>
    )
  }
}
