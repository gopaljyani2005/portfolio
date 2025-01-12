"use client";
import Image from "next/image";

import styles from "../styles/mainpage.module.css";
import TechStack from "@/components/skills/page";

function downloadfunct(){
  window.open("https://drive.google.com/file/d/12OHU2Kol2T-ttD1xphspb6HxBIAojc2u/view?usp=sharing");
}
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>Hello I&apos;m</h2>
            <h2 className={styles.name}>Gopala Ram Jyani</h2>
            <p className={styles.description}>
            Passionate about web development, machine learning, and leveraging modern frameworks like Next.js to design and build innovative, user-centric, and scalable digital solutions that solve real-world problems.
            </p>
            <button className={styles.downloadCv} onClick={downloadfunct}>Resume</button>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.profileImage}></div>
          </div>
        </section>
      </main>

      <TechStack/>
      
      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/gopala-ram-jyani-1734b4274/" target="_blank" rel="noopener noreferrer">
          <Image src="/image/linkedin.png" alt="LinkedIn" width={30} height={30} />
        </a>
        <a href="https://github.com/gopaljyani2005" target="_blank" rel="noopener noreferrer">
          <Image src="/image/github-logo.png" alt="GitHub" width={30} height={30} />
        </a>
        <a href="https://leetcode.com/u/jyanigopalaram/" target="_blank" rel="noopener noreferrer">
          <Image src="/image/leetcode.png" alt="LeetCode" width={30} height={30} />
        </a>
        <a href="https://www.instagram.com/jyani__gopal/" target="_blank" rel="noopener noreferrer">
          <Image src="/image/instagram.png" alt="Instagram" width={30} height={30} />
        </a>
      </footer>
    </div>
  );
}
