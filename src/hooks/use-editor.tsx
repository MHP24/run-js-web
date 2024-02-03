'use client'

import { runCode } from '@/actions'
import { EditorContext } from '@/context'
import { type editor } from 'monaco-editor'
import { useContext, useEffect, useRef, useState } from 'react'

export const useEditor = (language: string) => {
  // * Debounce used on change
  const [debounce, setDebounce] = useState<number | null>(null)
  // * Context handler
  const {
    updateCurrentCode,
    updateCurrentOutput,
    code
  } = useContext(EditorContext)

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
      const output = await runCode(
        language, code
      )
      updateCurrentOutput(output)
    }, 500) as unknown as number)
  }

  return {
    code,
    handleEditor,
    onChange
  }
}
