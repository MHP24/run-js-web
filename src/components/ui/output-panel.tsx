'use client'

import { EditorContext } from '@/context'
import { type FC, useContext } from 'react'
import MonacoEditor from '@monaco-editor/react'

interface Props {
  height?: string | number
}

export const OutputPanel: FC<Props> = ({ height = '100%' }) => {
  const { output } = useContext(EditorContext)

  return (
    <div className='py-10 max-h-full'>
      <MonacoEditor
        height={height}
        theme='vs-dark'
        language='javascript'
        value={output}
        options={{
          fontSize: 17,
          lineHeight: 1.4,
          fontLigatures: true,
          renderLineHighlight: 'none',
          lineNumbers: 'off',
          readOnly: true,
          minimap: { enabled: false }
        }}
      />
    </div>
  )
}
