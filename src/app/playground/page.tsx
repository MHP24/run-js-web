import { Editor, OutputPanel } from '@/components'

export default function Playground () {
  return (
    <div className='grid grid-cols-2 h-full'>
      <Editor/>
      <OutputPanel/>
    </div>

  )
}
