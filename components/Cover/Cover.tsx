import Image from "next/Image";

export const Cover = ({ children, background }) => {
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