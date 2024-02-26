import clsx from "clsx";
import { ReactNode } from "react"

interface ITagProps {
  children: ReactNode;
  variants:'purple' | 'neutral';
  size?: 'sm' | 'md' | 'lg'; 
}

export const Tag = (function Tag(
    { children, variants, size }: ITagProps,
) {
  return (
    <div className={clsx(' flex justify-between',
    {
        'bg-secondary text-white': variants === 'purple',
        'bg-white border-neutral-medium border-4 font-semibold text-neutral-medium ': variants === 'neutral',
        'rounded-3xl px-4 py-2': size === 'sm'
    },)}>
        {children}
    </div>
  )
})
