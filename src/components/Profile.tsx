import { useEffect, useState } from "react"
import profil from "../images/profil.webp"
import { AnimatePresence, motion } from "framer-motion"

const Profile = () => {
  const textArr: string[] = ["Dumbass", "Introvert", "Worthless", "Braindead"]
  const [textIndex, setTextIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArr.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [textArr.length])

  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
      <img src={profil} alt="Wetar's profile" className="w-39 md:w-65" />
      <div className="flex justify-center items-center gap-2">
        <h1 className="text-white text-lg md:text-2xl font-bold">Wetar</h1>
        <p className="text-white text-lg md:text-2xl font-medium">|</p>
        <AnimatePresence mode="wait">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} key={textIndex} className="text-gray-400 text-lg md:text-2xl font-bold">{textArr[textIndex]}</motion.h1>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Profile
