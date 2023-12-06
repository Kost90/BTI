'use client'
import { useAppSelector } from "@/lib/hooks"

function ThemeContainer({children}:{children:React.ReactNode}) {
    const theme = useAppSelector((state) => state.theme.theme)
  return (
    <div className={theme}>{children}</div>
  )
}

export default ThemeContainer