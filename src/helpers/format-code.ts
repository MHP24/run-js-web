export const formatCode = (outputs: unknown[] = []) => {
  try {
    return outputs.map(
      (code: unknown) => (
        JSON.stringify(code, null, 2)
      )
    ).join('\n')
  } catch (error) {
    return ''
  }
}
