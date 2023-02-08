'use client'
import { Badge, Button, Divider, Input } from '@geist-ui/core'
import { ExternalLink, Search, Sliders } from '@geist-ui/icons'
import Link from 'next/link'

export default function DomainsPage() {
  return (
    <div>
      <div className="max-w-7xl p-4 mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between p-4">
          <div>
            <h1 className="text-3xl mb-3 sm:my-3">
              Edge Config{' '}
              <Badge style={{ backgroundColor: '#fc4f97' }} mb={0.5} ml={0.2}>
                Beta
              </Badge>
            </h1>
            <div className="text-sm pb-3 sm:pb-0">
              <span className="opacity-50">
                Ultra low-latency data you can read from your projects.
              </span>
              <Link href="#" className="text-blue-500 flex items-center gap-2">
                Learn more <ExternalLink size={16} />
              </Link>
            </div>
          </div>
          <Button w={-1} type="secondary">
            Create Store
          </Button>
        </div>
      </div>
      <Divider />
      <div className="max-w-7xl p-6 mx-auto flex flex-col lg:flex-row min-h-[500px] 2xl:min-h-[700px]">
        <div className="w-full">
          <div className="inline-flex items-center w-full gap-2">
            <Input icon={<Search />} placeholder="Search..." w="100%" />
            <Button icon={<Sliders size={20} />} auto scale={2 / 3} mb={0.5} />
          </div>
          <div className="w-full h-96 border-dashed border border-[#333] grid place-items-center rounded-lg mt-10 bg-[#111]">
            <div className="text-center">
              <div className="pb-9">
                <h1 className="font-semibold py-2">No Stores</h1>
                <h1 className="text-[#9b9b9b] text-sm">
                  Edge Config store to begin reading key-value data from your
                  projects
                </h1>
              </div>
              <Link
                href="#"
                className="w-max px-2.5 py-1.5 rounded font-semibold bg-white text-black hover:bg-black hover:text-white focus:bg-[#282828] border border-white transition-all duration-200"
              >
                Create Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
