interface PostProps {
  url: string
  body?: any
  headers?: any
}

export const post = async <T>(
  { url, body = {}, headers = {} }: PostProps
): Promise<T> => {
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  })

  return await request.json()
}
