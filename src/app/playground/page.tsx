import { Editor, OutputPanel } from '@/components'

export default function Playground () {
  return (
    <div className='grid grid-cols-5 h-screen overflow-hidden'>
      <div className='col-span-3'>
        <Editor height='calc(100vh - 20px)'/>
      </div>
      <div className='col-span-2'>
        <OutputPanel height='calc(100vh - 20px)'/>
      </div>
    </div>

  )
}
