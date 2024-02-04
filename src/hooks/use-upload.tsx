import { extensionLanguages } from '@/constants/extension-languages'
import { EditorContext } from '@/context'
import { useContext, type ChangeEvent } from 'react'

export const useUpload = () => {
  // ! This hook requires EditorContext functionalities (high dependency)
  const {
    updateCurrentLanguage,
    updateCurrentCode,
    executeCode
  } = useContext(EditorContext)

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    // * File checking..
    const selectedFile = (e.target?.files ?? [])[0]
    if (!selectedFile) return

    // * Extension validation
    const { name } = selectedFile
    if (!name.match(/\.(ts|js)$/)) return

    const reader = new FileReader()

    // * Main event handler for upload
    reader.onload = async (event) => {
      if (!event.target?.result) return
      // * Language and code required for execution
      const language = extensionLanguages[name.split('.').at(-1) ?? '']
      const code = event.target.result as string

      // * Handling to extract data from file and update ui
      updateCurrentLanguage(
        language
      )
      updateCurrentCode(code)
      await executeCode(language, code)
    }

    reader.readAsText(selectedFile)
  }
  return {
    onUpload
  }
}
