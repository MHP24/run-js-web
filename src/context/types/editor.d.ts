export type EditorState = {
  code: string
  language: string
  output: string
}

export type TEditorContext = {
  updateCurrentOutput: (data: string) => void
  updateCurrentLanguage: (data: string) => void
  updateCurrentCode: (data: string) => void
} & EditorState
