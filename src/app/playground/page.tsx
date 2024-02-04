import { Editor, LanguageSelector, Logo, OutputPanel } from '@/components'

export default function Playground () {
  return (
    <div className='grid grid-cols-5 h-screen overflow-hidden'>
      <div className='col-span-3 border-[1px] border-c2'>
        <div className='h-16 flex gap-3 items-center px-4 border-y-[1px] border-c2'>
          <Logo/>
          <LanguageSelector/>
          <div className='flex-1 text-right'>
            <h3>Upload a file</h3>
          </div>
        </div>

        <Editor height='calc(100vh - 20px)'/>
      </div>
      <div className='col-span-2 border-[1px] border-c2'>
        <div className='h-16 flex gap-3 items-center p-4 border-y-[1px] border-c2'>
          <h3 className='select-none'>Output</h3>
        </div>
        <OutputPanel height='calc(100vh - 20px)'/>
      </div>
    </div>

  )
}
