import { type FC, type PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='h-screen'>
      {children}
    </main>
  )
}

export default Layout
