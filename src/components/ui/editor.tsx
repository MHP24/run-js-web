'use client'

import { editorBaseOptions } from '@/constants/editor-options'
import { useEditor, useMonaco } from '@/hooks'
import MonacoEditor from '@monaco-editor/react'
import { type FC } from 'react'

interface Props {
  height?: string | number
}

export const Editor: FC<Props> = ({ height = '100%' }) => {
  // * Custom hook to handle editor states
  const { code, language } = useEditor()
  const { handleEditor, onChange } = useMonaco(language)

  return (
    <div className='overflow-hidden'>
      <MonacoEditor
        height={height}
        theme='vs-dark'
        language={language}
        onMount={handleEditor}
        value={code}
        onChange={async () => { await onChange() }}
        options={{
          ...editorBaseOptions,
          lineNumbers: 'on',
          renderLineHighlight: 'none',
          scrollbar: {
            vertical: 'hidden',
            horizontal: undefined,
            useShadows: false
          }
        }}
      />
    </div>
  )
}
