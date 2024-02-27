import clsx from "clsx";
import { ReactNode } from "react"

interface ITagProps {
  children: ReactNode;
  variants:'purple' | 'neutral' | 'alert';
  size?: 'xsm' | 'sm' | 'md' | 'lg'; 
}

export const Tag = (function Tag(
    { children, variants, size }: ITagProps,
) {
  return (
    <div className={clsx(' flex justify-between',
    {
        'bg-secondary text-white': variants === 'purple',
        'bg-[#FFDFE4] text-black font-semibold': variants === 'alert',
        'bg-white border-neutral-medium border-4 font-semibold text-neutral-medium ': variants === 'neutral',
        'rounded-3xl px-4 py-2': size === 'sm',
        'rounded-[20px] px-4 py-[7px]': size === 'sm'

    },)}>
        {children}
    </div>
  )
})
