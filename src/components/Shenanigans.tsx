import type { IconType } from "react-icons"
import { SiDiscord, SiGithub, SiReddit, SiYoutube } from "react-icons/si"
import { useGlitch } from "react-powerglitch"

const Projects = () => {
  const { ref } = useGlitch()
  const logoDatas: { icon: IconType, color: string, hovered: string, url: string }[] = [
    {
      icon: SiYoutube,
      color: "#FF0033",
      hovered: "#c90028",
      url: "https://www.youtube.com/@wetarwashere"
    },
    {
      icon: SiGithub,
      color: "#ffffff",
      hovered: "#6A7282",
      url: "https://github.com/wetarwashere"
    },
    {
      icon: SiDiscord,
      color: "#5865F2",
      hovered: "#3740a3",
      url: "https://discord.com/users/1063743025710379018"
    },
    {
      icon: SiReddit,
      color: "#ff5212",
      hovered: "#b83e12",
      url: "https://www.reddit.com/user/wetarwashere"
    }
  ]

  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-6">
      <div className="flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">
        <h1 className="text-white text-4xl font-bold">About Me</h1>
        <p className="text-white text-[0.75rem] md:text-lg md:font-medium mx-8 md:mx-0 md:max-w-120"><span className="font-bold">Wetar</span> whose real name is <span className="font-bold">Azril</span> is a <span className="font-bold">Junior Web Developer</span> and also a certified dumbass whose interest is on backend but for now still mainly doing some frontend stuff to sharpen his skill. My hobby as you have guessed are coding and playing games, and also i'm an introvert if that ain't worse enough yet.</p>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-4">
        <h1 className="text-white text-4xl font-bold">Projects</h1>
        <div className="flex flex-row bg-white justify-center items-center p-1 md:p-2 gap-2">
          <a target="_blank" href="https://github.com/wetarwashere/fyou" ref={ref} className="text-lg md:text-2xl font-bold active:underline hover:underline underline-offset-1">FFFYou Discord Bot</a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-5">
        <h1 className="text-white text-4xl font-bold">Find Me</h1>
        <div className="flex justify-center items-start gap-3">
          {logoDatas.map((logoData, index) => (
            <a href={logoData.url} key={index} target="_blank" rel="noopener noreferrer">
              <logoData.icon className="text-white size-7 md:size-8 transition-all duration-500 active:scale-108 hover:scale-108" color={logoData.color} onMouseEnter={(event) => event.currentTarget.style.color = logoData.hovered} onMouseLeave={(event) => event.currentTarget.style.color = logoData.color} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
