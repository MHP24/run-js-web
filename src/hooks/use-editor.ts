'use client'

import { EditorContext } from '@/context'
import { useContext } from 'react'

export const useEditor = () => {
  const contextData = useContext(EditorContext)
  return contextData
}
