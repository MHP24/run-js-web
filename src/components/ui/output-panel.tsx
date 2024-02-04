'use client'

import React, { type FC } from 'react'
import MonacoEditor from '@monaco-editor/react'
import { formatCode } from '@/helpers'
import { editorBaseOptions } from '@/constants/editor-options'
import { useEditor } from '@/hooks'

interface Props {
  height?: string | number
}

export const OutputPanel: FC<Props> = ({ height = '100%' }) => {
  const { output } = useEditor()

  return (
    <div className='py-2 max-h-full'>
      <MonacoEditor
        height={height}
        theme='vs-dark'
        language='javascript'
        value={formatCode(output)}
        options={{
          ...editorBaseOptions,
          renderLineHighlight: 'none',
          lineNumbers: 'off',
          readOnly: true,
          padding: { top: 0, bottom: 0 },
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
