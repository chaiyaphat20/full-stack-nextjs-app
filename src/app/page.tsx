import AppHeader from '@/client-components/AppHeader'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <AppHeader />
      <h1>Hello Next.js 13</h1>
    </main>
  )
}
