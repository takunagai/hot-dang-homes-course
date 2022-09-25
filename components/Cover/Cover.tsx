import Image from "next/Image";
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode
  background: string
}

export const Cover = ({ children, background }: Props) => {
  return (
    <div className="h-screen bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      <Image
        alt="cover"
        src={background}
        layout="fill"
        objectFit="cover"
        className="mix-blend-soft-light"
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  )
};