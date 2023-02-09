import Link from 'next/link'
import { Github, Twitter } from '@geist-ui/icons'

const footerLinks = [
  { label: 'Home', to: '#' },
  { label: 'Documentation', to: '#' },
  { label: 'Guides', to: '#' },
  { label: 'Help', to: '#' },
  { label: 'Contact Us', to: '#' },
  { label: 'Blog', to: '#' },
  { label: 'Changelog', to: '#' },
  { label: 'Pricing', to: '#' },
  { label: 'Enterprise', to: '#' }
]

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-10 items-center gap-5 text-sm lg:text-md flex-wrap w-full py-5 border-b sm:border-0 border-[#333]">
      {footerLinks.map(({ label, to }) => (
        <Link
          className="opacity-50 hover:opacity-100 transition duration-200 lg:text-center"
          key={label}
          href={to}
        >
          {label}
        </Link>
      ))}
      <div className="hidden lg:inline-flex items-center gap-4">
        <div className="opacity-50 hover:opacity-100 transition duration-200">
          <Github size={16} />
        </div>
        <div className="w-[1px] h-[20px] bg-[#333]"></div>
        <div className="opacity-50 hover:opacity-100 transition duration-200">
          <Twitter size={16} />
        </div>
      </div>
    </div>
  )
}
