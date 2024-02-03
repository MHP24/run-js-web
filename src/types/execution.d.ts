export type Execution = ExecutionSuccessfully | ExecutionFailed

export type ExecutionSuccessfully = {
  execution: 'success'
  output: string
}

export type ExecutionFailed = {
  execution: 'failed'
  message: string
  error: string
  statusCode: number
}
