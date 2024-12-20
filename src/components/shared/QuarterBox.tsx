import React, { FC } from 'react'

interface IProps {
    header:string;
    description: string;
    number: number
    haveBorder?: boolean;
}

const QuarterBox:FC<IProps> = ({header, description, number,  haveBorder= true}) => {
  return (
       <div
        className={`border rounded-md w-full md:w-4/12 flex flex-col justify-center px-8 py-12 relative ${haveBorder && "border" }`}>
        <h4 className="font-bold text-lg hover:text-primary">{header}</h4>
        <p className="mt-2 text-slate-600">{description}</p>
        <div className="absolute text-gray-200 -top-10 right-10 text-[170px] font-bold -z-10 ">
          {number}
        </div>
      </div>
    
  )
}

export default QuarterBox
