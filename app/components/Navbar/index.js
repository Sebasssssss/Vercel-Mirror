'use client'
import Link from 'next/link'
import VercelIcon from '../Icons/vercel'
import TabNav from '../Tabs'
import Image from 'next/image'
import { Button } from '@geist-ui/core'
import { Bell, ChevronUpDown } from '@geist-ui/icons'
import avatar from '../../../public/avatar.jpg'

export default function Navbar() {
  return (
    <nav className="bg-black">
      <div className="flex justify-between px-6">
        <div className="inline-flex items-center gap-2">
          <VercelIcon />
          <div className="bg-[#333] z-20 w-8 h-[1px] -rotate-[57deg]"></div>
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
            <Image src={avatar} alt="avatar" width={32} height={32} />
          </div>
          <h6 className="flex items-center gap-2 text-sm">
            Sebass
            <span className="bg-[#a3a3a3] text-black px-2 text-xs rounded-xl pt-0.5">
              Hobby
            </span>
            <ChevronUpDown size={16} />
          </h6>
        </div>
        <div className="inline-flex items-center gap-4">
          <Button width={-1} scale={0.5} style={{ fontSize: '13px' }}>
            Feedback
          </Button>
          <div className="flex gap-4 text-sm">
            <Link
              href="#"
              className="opacity-50 hover:opacity-100 transition-all duration-200"
            >
              Changelog
            </Link>
            <Link
              href="#"
              className="opacity-50 hover:opacity-100 transition-all duration-200"
            >
              Help
            </Link>
            <Link
              href="#"
              className="opacity-50 hover:opacity-100 transition-all duration-200"
            >
              Docs
            </Link>
          </div>
          <div className="inline-flex items-center gap-3">
            <div className="rounded-full border border-[#333333] p-2 text-sm">
              <Bell size={16} />
            </div>
            <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center">
              <Image src={avatar} alt="secondAvatar" width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <TabNav />
      </div>
    </nav>
  )
}
