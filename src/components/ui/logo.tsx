'use client'

import { logoFont } from '@/fonts'
import { useEditor } from '@/hooks'
import Image from 'next/image'

export const Logo = () => {
  const { language } = useEditor()
  return (
    <h1 className={`flex gap-3 items-center text-xl text-white ${logoFont.className}`}>
      Run
      <Image src={`/svg/${language}.svg`} alt='javascript' height={25} width={25} className='mr-1'/>
    </h1>
  )
}
