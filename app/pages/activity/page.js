'use client'
import { Button, Divider } from '@geist-ui/core'
import { ChevronRightCircle } from '@geist-ui/icons'
import Image from 'next/image'
import avatar from '../../../public/avatar.jpg'
import { IoLogoGithub } from 'react-icons/io5'
import Link from 'next/link'

const listOfDeploys = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' }
]

export default function IntegrationsPage() {
  return (
    <div className="">
      <div className="max-w-7xl p-4 mx-auto">
        <h1 className="text-3xl mb-6 sm:mb-3 sm:my-3">Activity</h1>
      </div>
      <Divider />
      <div className="max-w-7xl p-6 mx-auto grid">
        <h1 className="font-bold text-lg whitespace-nowrap pb-6">
          February 2023
        </h1>
        <div className="w-full">
          <div className="inline-flex items-center gap-2">
            <Image
              alt="Github logo"
              src={avatar}
              className="rounded-full w-7 h-7"
            />
            <div className="opacity-30">
              <ChevronRightCircle size={15} />
            </div>
            <h1 className="text-sm">homepage</h1>
          </div>
          <ul className="px-5 py-1">
            {listOfDeploys.map(({ id }) => (
              <li key={id} className="border-b border-[#111] py-1 md:border-0">
                <div className="w-full inline-flex items-center gap-2">
                  <div className="w-5 h-5 relative">
                    <Image
                      src={avatar}
                      alt="Avatars"
                      className="rounded-full w-4 h-4 absolute top-0 right-0"
                    />
                    <div className="absolute -bottom-1 -left-1 z-10">
                      <IoLogoGithub className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="w-full inline-flex justify-between gap-2">
                    <div className="gap-1 text-sm">
                      <Link href="https://github.com/Sebasssssss">You</Link>{' '}
                      <span className="opacity-50">deployed</span>{' '}
                      <Link href="#">homepage</Link> (
                      <Link href="#">7912856</Link>{' '}
                      <span className="opacity-50">in</span>{' '}
                      <Link href="#">main</Link>){' '}
                      <span className="opacity-50">to</span>{' '}
                      <Link href="#">production</Link>
                    </div>
                    <h1 className="opacity-50">5d</h1>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Button w="100%">Load more</Button>
        </div>
      </div>
    </div>
  )
}
