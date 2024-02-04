'use client'

import { useUpload } from '@/hooks/use-upload'

export const FileUploader = () => {
  const { onUpload } = useUpload()

  return (
    <label htmlFor='file-upload' className='border-[1px] border-c2
      hover:cursor-pointer py-2 px-6 text-sm rounded-md'>
      <p>{'Upload your file (.ts .js supported)'}</p>
      <input
        id='file-upload'
        onChange={onUpload}
        className='border-2 absolute opacity-0 h-0 w-0 overflow-hidden'
        type='file'
      />
    </label>
  )
}
