'use client'

import { Button } from '..'
import { supportedLanguages } from '@/constants/supported-languages'
import { useEditor } from '@/hooks'

export const LanguageSelector = () => {
  const { updateCurrentLanguage, language } = useEditor()

  return (
    <div className='flex'>
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
