import { Navbar } from "@/components/navigation/navbar"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function layout({
  children
}: Props) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}
