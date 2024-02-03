'use server'

import { httpAdapter } from '@/adapters'

export const runCode = async (
  language: string, code: string
): Promise<any> => {
  // * Execution from docker container web service
  const output = await httpAdapter.post({
    url: `${process.env.API_COMPILER_BASE_URL}/compilers/run`,
    body: { language, code }
  })

  console.log({ output })
}
