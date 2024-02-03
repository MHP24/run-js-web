'use client'

import { EditorContext } from '@/context'
import { useEditor } from '@/hooks'
import MonacoEditor from '@monaco-editor/react'
import { useContext, type FC } from 'react'

interface Props {
  height?: string | number
}

export const Editor: FC<Props> = ({ height = '100%' }) => {
  // * Custom hook to handle editor states
  const { handleEditor, onChange } = useEditor('javascript')
  const { code } = useContext(EditorContext)

  return (
    <div className='p-4 pl-0 overflow-hid den'>
      <MonacoEditor
        height={height}
        theme='vs-dark'
        language='javascript'
        onMount={handleEditor}
        value={code}
        onChange={async () => { await onChange() }}
        options={{
          fontSize: 17,
          lineHeight: 1.4,
          fontLigatures: true,
          renderLineHighlight: 'none',
          lineNumbers: 'on',
          minimap: { enabled: false }
        }}
      />
    </div>
  )
}
