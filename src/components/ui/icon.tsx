import Image from 'next/image'
import { type FC } from 'react'

type Props = {
  icon: string
  width?: number
  height?: number
}
export const Icon: FC<Props> = ({ icon, width = 20, height = 20 }) => {
  return (
    <Image src={`/svg/${icon}.svg`} width={width} height={height} alt={`${icon} icon`}/>
  )
}
