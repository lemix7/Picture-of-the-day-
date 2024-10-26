import { useEffect , useState } from "react"
import Nav from "./Nav"
type PictureProps = {
    imgUrl: string
    date: string
    copyRight: string
    imgDesc: string
}

const Picture = ({imgUrl,date,copyRight,imgDesc}:PictureProps) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    useEffect(() => {

        const handleReaize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize',handleReaize)

        return () => {
            window.removeEventListener('resize',handleReaize)
        }
        
    },[])


  return (
    <div className="w-full relative h-[700px] md:h-[800px] lg:h-screen   " style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}>
      <Nav/>
        
    {windowWidth > 1020 && <div className="w-[700px] absolute bottom-11 left-11 bg-black opacity-70 py-6 px-4 rounded-lg"> 
        <p className="text-white pop ">{imgDesc}</p>
        
        <div className="text-white w-full flex justify-between items-center mt-7 font-semibold pop ">
            <span>{copyRight}</span>
            <h4>{date}</h4>
        </div>
        </div>}
        
    </div>
  )
}

export default Picture