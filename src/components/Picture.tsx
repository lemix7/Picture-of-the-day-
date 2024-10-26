import { useEffect , useState } from "react"
import Nav from "./Nav"
type PictureProps = {
    lowResUrl: string;
    highResUrl: string;
    date: string
    copyRight: string
    imgDesc: string
    title:string
}

const Picture = ({lowResUrl,highResUrl,date,copyRight,imgDesc,title}:PictureProps) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    const [imgUrl, setImgUrl] = useState<string>(lowResUrl)

    useEffect(() => {

        const handleReaize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize',handleReaize)

        return () => {
            window.removeEventListener('resize',handleReaize)
        }
        
    },[])

    useEffect (() => {
        if(!highResUrl) return

        const highResImage = new Image()
        highResImage.src = highResUrl
        highResImage.onload = () => {
            setImgUrl(highResUrl)
        }
    },[highResUrl])


  return (
    <div className="w-full relative h-[700px] md:h-[800px] lg:h-screen   " style={{
        backgroundColor: "black",
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}>
      <Nav/>
        
    {windowWidth > 1020 && <div className="w-[700px] absolute bottom-11 left-11 bg-black opacity-70 py-6 px-4 rounded-lg"> 

        <h2 className="text-white pop text-xl font-semibold mb-6">{title}</h2> 
        <p className="text-white pop ">{imgDesc}</p>
        
        <div className="text-white w-full flex justify-between items-center leading-6 mt-7 font-semibold pop ">
            <span className="text-xs">{copyRight}</span>
            <h4 className="text-xs">{date}</h4>
        </div>
        </div>}
        
    </div>
  )
}

export default Picture