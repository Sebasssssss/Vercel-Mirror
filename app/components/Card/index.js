import { GitBranch, Github } from '@geist-ui/icons'
import Image from 'next/image'
import avatar from '../../../public/avatar.jpg'

export default function Card() {
  return (
    <div className="w-full h-52 bg-black border border-[#333] hover:border-white hover:border-2 rounded-lg p-4 mt-4">
      <div className="inline-flex items-center gap-2">
        <div className="w-8 h-8 rounded-full">
          <Image alt="Avatar" src={avatar} />
        </div>
        <div>
          <h1 className="font-semibold">homepage</h1>
          <h1 className="opacity-60">homepage-amber-five.vercel.app</h1>
        </div>
      </div>
      <div className="opacity-60 mt-3">
        <h1>Fixed some details</h1>
        <div className="inline-flex items-center gap-1 text-sm">
          <GitBranch size={16} />
          From main
        </div>
      </div>
      <div>
        <h1 className="inline-flex items-center gap-1 mt-8 opacity-60">
          6h ago via <Github size={16} />
        </h1>
      </div>
    </div>
  )
}
