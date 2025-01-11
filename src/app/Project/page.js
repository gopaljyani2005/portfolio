import styles from "../../styles/project.module.css";

export default function Project() {
  return (
    <div>
      <div className={styles.projectContainer}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>SkillSprint</h3>
          <span className={styles.projectDetails}>

          </span>
          <span className={styles.projectDuration}>10/2024 -- 12/2024</span>
        </div>
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/gopaljyani2005/SkillSprint"
            target="_blank"
            className={styles.projectLink}
          >
            GitHub
          </a>
        </div>
        <ul className={styles.projectDetailsList}>
          <li>
            Designed and developed an interactive online quiz platform with
            dedicated teacher and student portals, ensuring seamless and secure
            quiz management and participation.
          </li>
          <li>
            <strong>Teacher Portal:</strong> Create and manage quizzes, conduct
            secure quizzes, evaluate submissions, and email student grades.
          </li>
          <li>
            <strong>Student Portal:</strong> Register, participate in quizzes,
            view marks, track progress, and access detailed response sheets.
          </li>
          <li>
            <strong>Tools & Technologies Used:</strong> HTML, CSS, JavaScript,
            Next.js, MySQL (database), AWS (deploy).
          </li>
        </ul>
      </div>

      <div className={styles.projectContainer}>
  <div className={styles.projectHeader}>
    <h3 className={styles.projectTitle}>Bank Management System</h3>
    <span className={styles.projectDetails}>
      Prof. Suchetana Chakraborty (IIT Jodhpur)
    </span>
    <span className={styles.projectDuration}>03/2024 -- 06/2024</span>
  </div>
  <div className={styles.projectLinks}>
    <a
      href="https://jyanibankportal2005-rose.vercel.app/"
      target="_blank"
      className={styles.projectLink}
    >
      Live
    </a>
    <a
      href="https://github.com/gopaljyani2005/Bank-Portal"
      target="_blank"
      className={styles.projectLink}
      style={{ marginLeft: "10px" }}
    >
      GitHub
    </a>
  </div>
  <ul className={styles.projectDetailsList}>
    <li>
      Development of a comprehensive web-based Bank Management System.
    </li>
    <li>
      <strong>Admin Login:</strong> Enabled administrators to create new
      accounts (up to 1000 users), delete existing accounts, update and
      retrieve user details, and perform withdrawals and deposits.
    </li>
    <li>
      <strong>User Login:</strong> Enabling up to 1,000 users for seamless
      account administration and enhancing user engagement through efficient
      transaction processing capabilities.
    </li>
    <li>
      Transaction limit of 10,000 Rupees per transfer.
    </li>
    <li>
      <strong>Tools & Technologies Used:</strong> HTML, CSS, JavaScript,
      Next.js (hosted through Vercel).
    </li>
  </ul>
</div>



<div className={styles.projectContainer}>
  <div className={styles.projectHeader}>
    <h3 className={styles.projectTitle}>N-Game Genius Solver</h3>
    <span className={styles.projectDetails}>
      Prof. Palash Das (IIT Jodhpur)
    </span>
    <span className={styles.projectDuration}>01/2024 -- 04/2024</span>
  </div>
  <div className={styles.projectLinks}>
    <a
      href="https://n-game-genius-solver.vercel.app/"
      target="_blank"
      className={styles.projectLink}
    >
      Live
    </a>
    <a
      href="https://github.com/gopaljyani2005/N_Game_Genius_Solver.git"
      target="_blank"
      className={styles.projectLink}
      style={{ marginLeft: "10px" }}
    >
      GitHub
    </a>
  </div>
  <ul className={styles.projectDetailsList}>
    <li>
      Created a system in N-Game Genius to process 100 inputs simultaneously
      with accurate output via rigorous testing.
    </li>
    <li>
      Optimized 300+ problem submissions by analyzing inputs and deriving
      equations to meet target values efficiently.
    </li>
    <li>
      Streamlined development with HTML, CSS, JavaScript, Python, and Vercel,
      reducing project turnaround by 15 hours weekly through efficient code
      management and deployment.
    </li>
  </ul>
</div>

    </div>
  );
}
