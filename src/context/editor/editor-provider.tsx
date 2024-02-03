'use client'

import React, { useReducer, type FC, type PropsWithChildren, useEffect } from 'react'
import { type EditorState } from '../types'
import { EditorContext } from './editor-context'
import { editorReducer } from './editor-reducer'
import cookies from 'js-cookie'

const INITIAL_STATE: EditorState = {
  code: '',
  language: 'javascript',
  output: ''
}

export const EditorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(editorReducer, INITIAL_STATE)

  useEffect(() => {
    const code: string | undefined = cookies.get('code')
    if (code) updateCurrentCode(code)
  }, [])

  const updateCurrentOutput = (output: any) => {
    // cookies.set('output', output)
    dispatch({ type: '[update] - output', payload: JSON.stringify(output, null, 2) })
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
