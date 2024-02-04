import Image from 'next/image'
import Link from 'next/link'

export const FloatingInfo = () => {
  return (
    <Link
      href={'https://github.com/MHP24/run-js-web'}
      target='_blank'
      className='flex items-center justify-center gap-2 p-4
        hover:opacity-80 transition-all duration-75'
    >
      <Image src={'svg/github.svg'} width={30} height={30} alt='github logo'/>
      <p>Made by MHP24</p>
    </Link>
  )
}
