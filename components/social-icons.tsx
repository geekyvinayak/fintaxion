import Link from "next/link"
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export default function SocialIcons() {
  return (
    <div className="flex items-center space-x-5">
      <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
        <Linkedin className="w-5 h-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
        <Twitter className="w-5 h-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
        <Facebook className="w-5 h-5" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
        <Instagram className="w-5 h-5" />
        <span className="sr-only">Instagram</span>
      </Link>
    </div>
  )
}

