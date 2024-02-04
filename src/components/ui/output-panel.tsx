'use client'

import React, { type FC, useContext } from 'react'
import MonacoEditor from '@monaco-editor/react'
import { EditorContext } from '@/context'
import { formatCode } from '@/helpers'

interface Props {
  height?: string | number
}

export const OutputPanel: FC<Props> = ({ height = '100%' }) => {
  const { output } = useContext(EditorContext)

  return (
    <div className='py-2 max-h-full'>
      <MonacoEditor
        height={height}
        theme='vs-dark'
        language='javascript'
        value={formatCode(output)}
        options={{
          fontSize: 17,
          lineHeight: 1.4,
          fontLigatures: true,
          renderLineHighlight: 'none',
          lineNumbers: 'off',
          readOnly: true,
          minimap: { enabled: false },
          padding: { top: 0, bottom: 0 },
          overviewRulerLanes: 0,
          scrollbar: {
            vertical: 'hidden',
            horizontal: 'hidden',
            useShadows: false
          },
          // @ts-expect-error This property exists, but the editor dont have it typed
          renderIndentGuides: false
        }}
      />
    </div>
  )
}
