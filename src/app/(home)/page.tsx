import AppHeader from '@/client-components/AppHeader'
import styles from './page.module.css'
import { FaHome,FaAccusoft } from 'react-icons/fa';
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <div>
        <Link href="/about">ไปที่หน้า About</Link>
      </div>
      <p className='header'>สวัสดี Next.js 13</p>
      <p>{process.env.DB_PASSWORD}</p>
      <p>{process.env.DB_USER}</p>
      <p>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
      <FaHome size={50}/>
      <AppHeader />
      <h1 className={styles.title}>Hello Next.js 13</h1>
    </main>
  )
}
