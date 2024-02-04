import { type FC, type PropsWithChildren } from 'react'

export type Props = {
  onClick?: any
  isSelected: boolean
}

export const Button: FC<PropsWithChildren<Props>> = (
  { children, isSelected, ...rest }
) => {
  return (
    <button
      className={`rounded-md py-2 px-6 text-sm 
        ${isSelected ? 'bg-[#111111]' : 'bg-transparent'}
       text-white transition-colors duration-300`
      }
      {...rest}
    >
      {children}
    </button>
  )
}
