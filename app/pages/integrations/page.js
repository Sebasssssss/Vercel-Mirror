'use client'
import { Button, Card, Divider } from '@geist-ui/core'
import { ExternalLink } from '@geist-ui/icons'
import Image from 'next/image'
import Link from 'next/link'
import avatar from '../../../public/avatar.jpg'

export default function IntegrationsPage() {
  return (
    <>
      <div className="max-w-7xl p-4 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between p-4">
          <h1 className="text-3xl mb-6 md:mb-3 md:my-3">Integrations</h1>
          <div className="inline-flex items-center gap-4">
            <Button type="secondary">
              <span className="font-semibold">Browse Marketplace</span>
            </Button>
            <Button>Integrations Console</Button>
          </div>
        </div>
      </div>
      <Divider />
      <div className="max-w-7xl p-6 mx-auto flex flex-col lg:flex-row">
        <div className="w-full">
          <Card>
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-4">
                <Image
                  alt="Avatar"
                  src={avatar}
                  className="w-8 h-8 rounded-full"
                />
                <div className="grid">
                  <h1 className="font-semibold">Checkly</h1>
                  <h1 className="opacity-50 text-sm">Monitoring</h1>
                </div>
              </div>
              <div className="inline-flex items-center gap-4">
                <h1 className="text-sm opacity-60">Updated 5d ago</h1>
                <Button w={-1}>Manage</Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="grid w-full lg:w-max mt-8 lg:mt-0 lg:px-10">
          <h1 className="font-semibold opacity-60">Featured</h1>
          <div className="py-7">
            <div className="inline-flex items-center gap-4">
              <Image
                alt="MongoDb"
                src={avatar}
                className="w-7 h-7 rounded-full"
              />
              <div className="grid gap-0.5 text-sm">
                <h1 className="opacity-60 font-semibold">MongoDB Atlas</h1>
                <h1 className="opacity-50">Databases</h1>
              </div>
            </div>
            <div className="py-2">
              <Divider />
            </div>
            <div className="inline-flex items-center gap-4">
              <Image
                alt="MongoDb"
                src={avatar}
                className="w-7 h-7 rounded-full"
              />
              <div className="grid gap-0.5 text-sm">
                <h1 className="opacity-60 font-semibold">Sanity</h1>
                <h1 className="opacity-50">CMS</h1>
              </div>
            </div>
          </div>
          <h1 className="text-sm opacity-50 pb-2">
            Explore more integrations and expand your Vercel development
            experience
          </h1>
          <Link
            href="https://vercel.com/integrations"
            className="inline-flex items-center text-[#3291ff] text-sm gap-1"
          >
            Browse Marketplace <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </>
  )
}
