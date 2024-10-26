import { useEffect , useState } from "react";
import Picture from "./components/Picture"
import { PicDesc } from "./components/PicDesc";
function App() {
  const apiKey = 'Wgp1AnpdBKkcbFgtm5HCb8kua6x10moJurodj89o';
  const [astroInfo, setAstroInfo] = useState<any>({})
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

  useEffect(() =>{

    const fetchPicture = async () => {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      const data = await res.json()
      setAstroInfo(data)
      console.log(data);
    }

    fetchPicture()

  },[])

  return (
    <div className="bg-black h-full">

      <Picture 
      title={astroInfo.title || ""}
      lowResUrl={astroInfo.url}
      highResUrl={astroInfo.hdurl}
       imgDesc={astroInfo.explanation || ""}
       date={astroInfo.date || ""}
       copyRight={astroInfo.copyright || "unkonwn"}
       />

    {windowWidth < 1020 && <PicDesc 
       imgDesc={astroInfo.explanation || ""}
       date={astroInfo.date || ""}
       copyRight={astroInfo.copyright || "unkonwn"}/>}

    </div>



   
  )
}

export default App
