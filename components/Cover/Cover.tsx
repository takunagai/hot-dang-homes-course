import React from "react";
import Image from "next/Image";

type Props = {
  children: React.ReactNode
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
      {children}
    </div>
  )
};