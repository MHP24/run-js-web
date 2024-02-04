'use client'

import React, { useReducer, type FC, type PropsWithChildren, useEffect } from 'react'
import { type EditorState } from '../types'
import { EditorContext } from './editor-context'
import { editorReducer } from './editor-reducer'
import cookies from 'js-cookie'

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
    const code = cookies.get('code')
    if (code) updateCurrentCode(code)

    // * Language
    const language = cookies.get('language')
    if (language) updateCurrentLanguage(language)

    // * Latest output obtained
    const output = cookies.get('output')
    if (code && output) updateCurrentOutput(JSON.parse(output) as unknown[])
  }, [])

  // * Global functions provided...
  const updateCurrentOutput = (output: unknown[]) => {
    cookies.set('output', JSON.stringify(output))
    dispatch({ type: '[update] - output', payload: output })
  }

  const updateCurrentLanguage = (language: string) => {
    cookies.set('language', language)
    dispatch({ type: '[update] - language', payload: language })
  }

  const updateCurrentCode = (code: string) => {
    cookies.set('code', code)
    dispatch({ type: '[update] - code', payload: code })
  }

  return (
    <EditorContext.Provider value={{
      ...state,
      updateCurrentLanguage,
      updateCurrentOutput,
      updateCurrentCode
    }}>
      {children}
    </EditorContext.Provider>
  )
}
