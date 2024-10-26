import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"

export const Navbar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-node sm:px-12 gap 5"
    >
      <Link
        href={'/'}
        className="flex items-center gap-1"
      >
        <Image
          src={'/images/site-logo.svg'}
          width={24}
          height={24}
          alt="Dev Overflow logo"
        />

        <p
          className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="flex gap-5">
        <ThemeToggler />
      </div>
    </nav>
  )
}
