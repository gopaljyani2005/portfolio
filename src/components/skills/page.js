import styles from "../../styles/TechStack.module.css";

export default function TechStack() {
  return (
    <div className={styles.techStack}>
      <h1 className={styles.title}>Tech Stack</h1>
      <div className={styles.categories}>
        {/* Languages Section */}
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Languages</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <img src="/image/cpp.png" alt="C++" />
              <span>C++</span>
            </div>
            <div className={styles.item}>
              <img src="/image/python.png" alt="Python" />
              <span>Python</span>
            </div>
            <div className={styles.item}>
              <img src="/image/html.png" alt="HTML" />
              <span>HTMl</span>
            </div>
            <div className={styles.item}>
              <img src="/image/css.png" alt="css" />
              <span>CSS</span>
            </div>
            <div className={styles.item}>
              <img src="/image/js.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className={styles.item}>
              <img src="/image/matlab-svgrepo-com.svg" alt="JavaScript" />
              <span>MatLab</span>
            </div>
            <div className={styles.item}>
              <img src="/image/sql-server.png" alt="JavaScript" />
              <span>SQL</span>
            </div>
          </div>
        </div>

        {/* Frameworks Section */}
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Frameworks</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <img src="/image/nextjs-icon-svgrepo-com.svg" alt="Next.js" />
              <span>Next.js</span>
            </div>
            <div className={styles.item}>
              <img src="/image/PyTorch_logo_icon.svg" alt="PyTorch" />
              <span>PyTorch</span>
            </div>
            <div className={styles.item}>
              <img src="/image/react-2.svg" alt="React" />
              <span>React</span>
            </div>
            <div className={styles.item}>
              <img src="/image/nodejs.png" alt="Node.js" />
              <span>Node.js</span>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Tools</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <img src="/image/git-icon-logo-svgrepo-com.svg" alt="git" />
              <span>Git</span>
            </div>
            <div className={styles.item}>
              <img src="/image/Amazon_Web_Services_Logo.svg" alt="Docker" />
              <span>AWS</span>
            </div>
            <div className={styles.item}>
              <img src="/image/docker.png" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className={styles.item}>
              <img src="/image/mysql-ar21.svg" alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className={styles.item}>
              <img src="/image/linux-svgrepo-com.svg" alt="Kubernetes" />
              <span>Linux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
