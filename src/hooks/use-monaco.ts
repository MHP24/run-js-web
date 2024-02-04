'use client'

import { type editor } from 'monaco-editor'
import { useEffect, useRef, useState } from 'react'
import { useEditor } from '.'

export const useMonaco = (language: string) => {
  // * Debounce used on change
  const [debounce, setDebounce] = useState<number | null>(null)
  // * Context handler
  const {
    updateCurrentCode,
    executeCode,
    code
  } = useEditor()

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

    // * Code update and store in cookies
    const code = `${editorRef.current?.getValue()}`
    updateCurrentCode(code)

    // * Debounce for execution
    setDebounce(setTimeout(async () => {
      await executeCode(language, code)
    }, 500) as unknown as number)
  }

  return {
    code,
    handleEditor,
    onChange
  }
}
