import { GitBranch, Github } from '@geist-ui/icons'
import Image from 'next/image'

export default function Card({
  image,
  title = 'Example',
  source = 'deploy.vercel.app',
  commit = 'first commit',
  branch = 'main'
}) {
  return (
    <div className="w-full h-52 bg-black border border-[#333] hover:border-white hover:border-2 rounded-lg p-4 mt-4">
      <div className="inline-flex items-center gap-2">
        <Image alt={title} src={image} className="w-8 h-8 rounded-full" />
        <div>
          <h1 className="font-semibold">{title}</h1>
          <h1 className="opacity-60">{source}</h1>
        </div>
      </div>
      <div className="opacity-60 mt-3">
        <h1>{commit}</h1>
        <div className="inline-flex items-center gap-1 text-sm">
          <GitBranch size={16} />
          From {branch}
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
