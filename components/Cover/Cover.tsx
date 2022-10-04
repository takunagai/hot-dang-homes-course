import Image from "next/image"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  background: string
}

export const Cover = ({ children, background }: Props) => {
  return (
    <div className="relative flex h-screen min-h-[400px] items-center justify-center bg-slate-800">
      <Image
        alt="cover"
        src={background}
        layout="fill"
        objectFit="cover"
        className="mix-blend-soft-light"
      />
      <div className="z-10 max-w-5xl">{children}</div>
    </div>
  )
}
