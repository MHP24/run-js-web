'use client'

import React, { useReducer, type FC, type PropsWithChildren, useEffect } from 'react'
import { type EditorState } from '../types'
import { EditorContext } from './editor-context'
import { editorReducer } from './editor-reducer'
import { runCode } from '@/actions'

const INITIAL_STATE: EditorState = {
  code: '',
  language: 'javascript',
  output: []
}

export const EditorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(editorReducer, INITIAL_STATE)

  // * Loader for latest information (language, code and output)
  useEffect(() => {
    // * Code
    const code = localStorage.getItem('code')
    if (code) updateCurrentCode(code)

    // * Language
    const language = localStorage.getItem('language')
    if (language) updateCurrentLanguage(language)

    // * Latest output obtained
    const output = localStorage.getItem('output')
    if (code && output) updateCurrentOutput(JSON.parse(output) as unknown[])
  }, [])

  // * Global functions provided...
  const updateCurrentOutput = (output: unknown[]) => {
    localStorage.setItem('output', JSON.stringify(output))
    dispatch({ type: '[update] - output', payload: output })
  }

  const updateCurrentLanguage = (language: string) => {
    localStorage.setItem('language', language)
    dispatch({ type: '[update] - language', payload: language })
  }

  const updateCurrentCode = (code: string) => {
    localStorage.setItem('code', code)
    dispatch({ type: '[update] - code', payload: code })
  }

  const executeCode = async (language: string, code: string) => {
    const output = await runCode(
      language, code
    )
    updateCurrentOutput(output)
  }

  return (
    <EditorContext.Provider value={{
      ...state,
      updateCurrentLanguage,
      updateCurrentOutput,
      updateCurrentCode,
      executeCode
    }}>
      {children}
    </EditorContext.Provider>
  )
}
