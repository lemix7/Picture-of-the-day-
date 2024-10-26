type PictureProps = {
    date: string
    copyRight: string
    imgDesc: string
}

export const PicDesc = ({imgDesc,date,copyRight}:PictureProps) => {
  return (
    <div className="w-full mt-4 py-6 px-6  text-white pop">
        <p className="leading-7">{imgDesc}</p>

        <div className="w-full flex justify-between items-center mt-7 font-semibold pop ">
            <span>{copyRight}</span>
            <h4>{date}</h4>
        </div>

    </div>
  )
}
