import React from 'react';
import styles from '../../styles/about.module.css';

export default function Introduction() {
  return (
    <div className={styles.introductionPage}>
      <div className={styles.container}>
        <h1 className={styles.greeting}>Hi, I'm Gopala Ram Jyani</h1>
        <p className={styles.description}>
          I am a passionate <span>software developer</span>, <span>engineer</span>, and lifelong learner. Currently pursuing 
          a B.Tech. in Mechanical Engineering at <span>IIT Jodhpur</span>, I have a deep interest in developing 
          innovative solutions using technology.
        </p>
        <p className={styles.description}>
          My focus is on <span>web development</span>, <span>machine learning</span>, and building scalable 
          systems. I enjoy tackling complex challenges and contributing to impactful projects.
        </p>
        <div className={styles.goals}>
          <h2>My Goals</h2>
          <ul>
            <li>To excel in both academics and technical skills.</li>
            <li>To work on projects that make a difference in society.</li>
            <li>To master frameworks like Next.js, Django, and scalable cloud architectures.</li>
            <li>To continue improving my competitive coding abilities.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
