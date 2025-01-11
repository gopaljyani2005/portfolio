import Image from "next/image";
import styles from "../../styles/header.module.css";
export default function Header(){
    return (
        <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image src="/image/logo.png" alt="College Logo" width={100} height={100} />
        </div>
        <h1><i>Indian Institute Of Technology</i></h1>
        <nav className={styles.nav}>
          <a href="./">Home</a>
          <a href="/education">Education</a>
          <a href="/about">About Me</a>
          <a href="/Project">Project</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      </div>
    )
}