'use client'
import { EditorContext } from '@/context'
import { logoFont } from '@/fonts'
import Image from 'next/image'
import { useContext } from 'react'

export const Logo = () => {
  const { language } = useContext(EditorContext)
  return (
    <h1 className={`flex gap-3 items-center text-xl text-white ${logoFont.className}`}>
      Run
      <Image src={`/svg/${language}.svg`} alt='javascript' height={25} width={25} className='mr-1'/>
    </h1>
  )
}
