'use client'
import { Dot, Keyboard, Text } from '@geist-ui/core'
import { Github, Twitter } from '@geist-ui/icons'
import Link from 'next/link'
import VercelFull from '../Icons/FullVercelLogo'

export default function Footer() {
  return (
    <>
      <div className="w-full border-t border-[#333] sm:p-6">
        <div className="max-w-7xl mx-auto p-5">
          <div className="hidden md:flex justify-between">
            <div className="inline-flex items-center gap-5">
              <h1 className="inline-table items-center">
                <VercelFull />
              </h1>
              <h6 className="opacity-50 text-sm">
                Copyright © 2023 Vercel Inc. All rights reserved.
              </h6>
            </div>
            <div className="inline-flex items-center gap-5">
              <Link
                href="https://vercel-status.com/"
                className="w-max px-4 py-1 hidden lg:inline-flex items-center gap-2 text-sm border border-[#333] rounded-md hover:bg-[#111] transition duration-200"
              >
                Command Menu
                <div className="inline-flex items-center gap-1">
                  <Keyboard command scale={0.5} />
                  <Keyboard scale={0.5}>K</Keyboard>
                </div>
              </Link>
              <Link
                href="https://vercel-status.com/"
                className="w-max px-4 py-1 inline-flex items-center gap-2 border text-sm border-[#333] rounded-md hover:bg-[#111] transition duration-200"
              >
                Status:{' '}
                <div className="inline-flex items-center">
                  <Dot type="success" />
                  <Text type="success">All systems norm...</Text>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-10 items-center gap-5 text-sm lg:text-md lg:gap-1 flex-wrap w-full py-5 border-b sm:border-0 border-[#333]">
            <Link
              className="opacity-50 hover:opacity-100 transition duration-100"
              href="#"
            >
              Home
            </Link>
            <Link
              className="opacity-50 hover:opacity-100 transition duration-100"
              href="#"
            >
              Documentation
            </Link>
            <Link
              className="opacity-50 hover:opacity-100 transition duration-100"
              href="#"
            >
              Guides
            </Link>
            <Link
              className="opacity-50 hover:opacity-100 transition duration-100"
              href="#"
            >
              Help
            </Link>
            <Link
              className="opacity-50 hover:opacity-100 whitespace-nowrap transition duration-100"
              href="#"
            >
              Contact Us
            </Link>
            <Link
              className="opacity-50 hover:opacity-100 transition duration-100"
              href="#"
            >
              Blog
            </Link>
            <Link
              className="opacity-50 hover:opacity-100 transition duration-100"
              href="#"
            >
              Changelog
            </Link>
            <Link
              className="opacity-50 hover:opacity-100 transition duration-100"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="opacity-50 hover:opacity-100 transition duration-100"
              href="#"
            >
              Enterprise
            </Link>
            <div className="hidden lg:inline-flex items-center gap-4">
              <div className="border-r pr-4 opacity-50 hover:opacity-100 transition duration-100">
                <Github size={16} />
              </div>
              <div className="opacity-50 hover:opacity-100 transition duration-100">
                <Twitter size={16} />
              </div>
            </div>
          </div>
          <div className="md:hidden grid place-items-center gap-4 mt-8">
            <div className="inline-flex items-center gap-5">
              <h1 className="inline-table items-center">
                <VercelFull />
              </h1>
            </div>
            <Link
              href="https://vercel-status.com/"
              className="w-max px-4 py-1 inline-flex items-center gap-2 border text-sm border-[#333] rounded-md hover:bg-[#111] transition duration-200"
            >
              Status:{' '}
              <div className="inline-flex items-center">
                <Dot type="success" />
                <Text type="success">All systems norm...</Text>
              </div>
            </Link>
            <div className="lg:hidden inline-flex items-center gap-4">
              <div className="border-r pr-4 opacity-50 hover:opacity-100 transition duration-100">
                <Github size={16} />
              </div>
              <div className="opacity-50 hover:opacity-100 transition duration-100">
                <Twitter size={16} />
              </div>
            </div>

            <h6 className="opacity-50 text-sm">
              Copyright © 2023 Vercel Inc. All rights reserved.
            </h6>
            <div className="inline-flex items-center gap-5">
              <Link
                href="https://vercel-status.com/"
                className="w-max px-4 py-1 hidden lg:inline-flex items-center gap-2 text-sm border border-[#333] rounded-md hover:bg-[#111] transition duration-200"
              >
                Command Menu
                <div className="inline-flex items-center gap-1">
                  <Keyboard command scale={0.5} />
                  <Keyboard scale={0.5}>K</Keyboard>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
