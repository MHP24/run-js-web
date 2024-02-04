'use client'

import { useUpload } from '@/hooks'
import { Icon } from '..'

export const FileUploader = () => {
  const { onUpload } = useUpload()

  return (
    <label htmlFor='file-upload' className='border-[1px] border-c2
      hover:cursor-pointer py-2 px-6 text-sm rounded-md select-none'>
      <div className='flex gap-2 items-center'>
        <p>Import file</p>
        <Icon icon='file'/>
      </div>
      <input
        id='file-upload'
        onChange={onUpload}
        className='border-2 absolute opacity-0 h-0 w-0 overflow-hidden'
        type='file'
      />
    </label>
  )
}
