'use client'
import { motion } from "framer-motion"
import styles from './Button.module.css'

interface Props{
    children:React.ReactNode,
    type:any,
}

function Button({children, type}:Props) {
  return (
    <motion.button type={type} className={styles.btn} whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>{children}</motion.button>
  )
}

export default Button