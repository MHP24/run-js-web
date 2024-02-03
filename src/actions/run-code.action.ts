'use server'

import { httpAdapter } from '@/adapters'
import { type Execution } from '@/types'

export const runCode = async (
  language: string, code: string
): Promise<string> => {
  // * Execution from docker container web service
  const runProcess = await httpAdapter.post<Execution>({
    url: `${process.env.API_COMPILER_BASE_URL}/compilers/run`,
    body: { language, code }
  })

  return (
    runProcess.execution === 'success'
      ? runProcess.output
      : runProcess.error
  )
}
