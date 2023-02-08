'use client'
import { Button, Divider, Input } from '@geist-ui/core'
import { Search, Sliders } from '@geist-ui/icons'

export default function DomainsPage() {
  return (
    <div>
      <div className="max-w-7xl p-4 mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between p-4">
          <h1 className="text-3xl mb-6 sm:mb-3 sm:my-3">Domains</h1>
          <div className="inline-flex items-center gap-4">
            <Button w={-1}>Buy</Button>
            <Button w={-1}>Add</Button>
            <Button w={-1}>Transfer in</Button>
          </div>
        </div>
      </div>
      <Divider />
      <div className="max-w-7xl p-6 mx-auto flex flex-col lg:flex-row min-h-[500px] 2xl:min-h-[700px]">
        <div className="w-full">
          <div className="inline-flex items-center w-full gap-2">
            <Input icon={<Search />} placeholder="Search..." w="100%" />
            <Button icon={<Sliders size={20} />} auto scale={2 / 3} mb={0.5} />
          </div>
          <div className="w-full h-96 border-dashed border border-[#333] grid place-items-center uppercase text-[#9b9b9b] rounded-lg mt-10">
            No domains to show
          </div>
        </div>
      </div>
    </div>
  )
}
