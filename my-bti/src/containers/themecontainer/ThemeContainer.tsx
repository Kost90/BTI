'use client'
import { useAppSelector } from "@/lib/hooks"
import styles from './ThemeContainer.module.css'

function ThemeContainer({children}:{children:React.ReactNode}) {
    const theme = useAppSelector((state) => state.theme.theme)
  return (
    <div className={styles[theme]}>{children}</div>
  )
}

export default ThemeContainer