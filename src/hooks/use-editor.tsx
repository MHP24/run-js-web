'use client'

import { runCode } from '@/actions'
import { type editor } from 'monaco-editor'
import { useEffect, useRef, useState } from 'react'

export const useEditor = (language: string) => {
  // * Debounce used on change
  const [debounce, setDebounce] = useState<number | null>(null)

  // * References related to monaco editor
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)
  const handleEditor = (editor: editor.IStandaloneCodeEditor) => {
    editorRef.current = editor
  }

  // * Clean timeout on component unmount
  useEffect(() => {
    return () => {
      if (debounce !== null) {
        clearTimeout(debounce)
      }
    }
  }, [])

  // * Code change listener
  const onChange = async () => {
    if (debounce !== null) {
      clearTimeout(debounce)
    }

    setDebounce(setTimeout(async () => {
      await runCode(language, `${editorRef.current?.getValue()}`)
    }, 1000) as unknown as number)
  }

  return {
    handleEditor,
    onChange
  }
}
