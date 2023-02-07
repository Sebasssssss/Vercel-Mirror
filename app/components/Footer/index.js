'use client'

import { Button, Divider, Dot, Keyboard, Text } from '@geist-ui/core'
import { Github, Grid, Twitter } from '@geist-ui/icons'
import Link from 'next/link'
import VercelFull from '../Icons/FullVercelLogo'

export default function Footer() {
  return (
    <>
      <Divider />
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex justify-between">
          <div className="inline-flex items-center gap-5">
            <h1 className="inline-table items-center">
              <VercelFull />
            </h1>
            <h6 className="opacity-50 text-sm">
              Copyright © 2023 Vercel Inc. All rights reserved.
            </h6>
          </div>
          <div className="inline-flex items-center gap-5">
            <Button>
              Command Menu
              <Keyboard>
                <Grid size={16} />
              </Keyboard>
              <Keyboard>K</Keyboard>
            </Button>
            <Button>
              Status: <Dot type="success" />
              <Text type="success">All systems norm...</Text>
            </Button>
          </div>
        </div>
        <div className="inline-flex gap-14 flex-wrap w-full py-5">
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
            className="opacity-50 hover:opacity-100 transition duration-100"
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
          <div className="inline-flex items-center gap-4">
            <div className="border-r pr-4 opacity-50 hover:opacity-100 transition duration-100">
              <Github size={16} />
            </div>
            <div className="opacity-50 hover:opacity-100 transition duration-100">
              <Twitter size={16} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
