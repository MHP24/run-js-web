'use client'

import React, { useReducer, type FC, type PropsWithChildren } from 'react'
import { type EditorState } from '../types'
import { EditorContext } from './editor-context'
import { editorReducer } from './editor-reducer'
import cookies from 'js-cookies'

const INITIAL_STATE: EditorState = {
  code: '',
  language: 'javascript',
  output: ''
}

export const EditorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(editorReducer, INITIAL_STATE)

  const updateCurrentOutput = (output: string) => {
    cookies.setItem('output', JSON.stringify(output))
    dispatch({ type: '[update] - output', payload: output })
  }

  const updateCurrentLanguage = (language: string) => {
    cookies.setItem('language', JSON.stringify(language))
    dispatch({ type: '[update] - language', payload: language })
  }

  const updateCurrentCode = (code: string) => {
    cookies.setItem('code', JSON.stringify(code))
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
