import {
  Editor,
  FileUploader,
  FloatingInfo,
  Icon,
  LanguageSelector,
  Logo,
  OutputPanel
} from '@/components'

export default function Playground () {
  return (
    <div className='grid grid-cols-5 h-screen overflow-hidden'>
      {/* Editor side */}
      <div className='col-span-3 border-[1px] border-c2'>
        <div className='h-16 flex gap-3 items-center px-4 border-y-[1px] border-c2'>
          <Logo/>
          <LanguageSelector/>
          <div className='flex flex-1 justify-end'>
            <FileUploader/>
          </div>
        </div>

        <Editor height='calc(100vh - 20px)'/>

      </div>

      {/* Output panel side */}
      <div className='col-span-2 border-[1px] border-c2'>
        <div className='h-16 flex gap-3 items-center p-4 border-y-[1px] border-c2'>
          <div className='flex flex-1 justify-end items-center gap-2'>
            <h3 className='select-none text-md'>Output</h3>
            <Icon icon='console'/>
          </div>
        </div>
        <OutputPanel height='calc(100vh - 20px)'/>
      </div>

      {/* Floating info for repo */}
      <div className='fixed right-0 bottom-0 z-50'>
        <FloatingInfo/>
      </div>
    </div>

  )
}
