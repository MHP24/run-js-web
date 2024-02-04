export type Execution = ExecutionSuccessfully | ExecutionFailed

export type ExecutionSuccessfully = {
  execution: 'success'
  outputs: string
}

export type ExecutionFailed = {
  execution: 'failed'
  message: string
  error: string
  statusCode: number
}
