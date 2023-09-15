import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">transaction</Link>
      <Link href="/contract">contract</Link>
      <Link href="/ertp">ERTP</Link>
    </nav>
  )
}
