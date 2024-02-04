'use client'

import { useContext } from 'react'
import { Button } from '..'
import { EditorContext } from '@/context'
import { supportedLanguages } from '@/constants/supported-languages'

export const LanguageSelector = () => {
  const { updateCurrentLanguage, language } = useContext(EditorContext)

  return (
    <div className=''>
      {
        supportedLanguages.map(({ name, label }) => (
          <Button
            key={`language-${name}`}
            onClick={() => { updateCurrentLanguage(name) }}
            isSelected={language === name}
          >
            { label }
          </Button>
        ))
      }
    </div>
  )
}
