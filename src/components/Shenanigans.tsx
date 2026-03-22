import type { IconType } from "react-icons"
import { SiDiscord, SiGithub, SiReddit, SiYoutube } from "react-icons/si"

const Projects = () => {
  const logoDatas: { icon: IconType, color: string, url: string }[] = [
    {
      icon: SiYoutube,
      color: "#FF0033",
      url: "https://www.youtube.com/@wetarwashere"
    },
    {
      icon: SiGithub,
      color: "#6A7282",
      url: "https://github.com/wetarwashere"
    },
    {
      icon: SiDiscord,
      color: "#5865F2",
      url: "https://discord.com/users/1063743025710379018"
    },
    {
      icon: SiReddit,
      color: "#ff5212",
      url: "https://www.instagram.com/wetarwashere/"
    }
  ]

  return (
    <div className="flex flex-col justify-center items-start gap-6">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="text-white text-4xl font-bold">About Me</h1>
        <p className="text-white text-lg font-medium max-w-120"><span className="font-bold">Wetar</span> whose real name is <span className="font-bold">Azril Haris Al Bana</span> is a <span className="font-bold">Junior Web Developer</span> and also a certified dumbass whose interest is on backend but for now still mainly doing some frontend stuff to sharpen his skill. My hobby as you have guessed is coding and playing games, and also i'm an introvert if that ain't worse enough yet.</p>
      </div>
      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="text-white text-4xl font-bold">Projects</h1>
        <p className="text-white text-lg font-medium">Still nothing currently.</p>
      </div>
      <div className="flex flex-col justify-center items-start gap-5">
        <h1 className="text-white text-4xl font-bold">Find Me</h1>
        <div className="flex justify-center items-start gap-3">
          {logoDatas.map((logoData, index) => (
            <a href={logoData.url} key={index} target="_blank" rel="noopener noreferrer">
              <logoData.icon className="text-white size-8 transition-all duration-200" onMouseEnter={(event) => event.currentTarget.style.color = logoData.color} onMouseLeave={(event) => event.currentTarget.style.color = "#ffffff"} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
