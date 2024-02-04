import { type EditorState } from '../types'

type Action =
{
  type: '[update] - code'
  payload: string
} |
{
  type: '[update] - output'
  payload: unknown[]
} |
{
  type: '[update] - language'
  payload: string
}

export const editorReducer = (
  state: EditorState, action: Action
): EditorState => {
  switch (action.type) {
    case '[update] - code':
      return { ...state, code: action.payload }

    case '[update] - language':
      return { ...state, language: action.payload }

    case '[update] - output':
      return { ...state, output: action.payload }
    default:
      return state
  }
}
