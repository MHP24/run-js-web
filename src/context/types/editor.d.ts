export type EditorState = {
  code: string
  language: string
  output: unknown[]
}

export type TEditorContext = {
  updateCurrentOutput: (data: unknown[]) => void
  updateCurrentLanguage: (data: string) => void
  updateCurrentCode: (data: string) => void
  executeCode: (language: string, code: string) => Promise<void>
} & EditorState
