'use server'

export const runCode = async (language: string, code: string): Promise<any> => {
  console.log('run code fn')
  return { language, code }
}
