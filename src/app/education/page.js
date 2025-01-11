import styles from '../../styles/education.module.css';

export default function Education() {
    return (
        <main className={styles.main}>
            <h1>Education</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Degree/Certificate</th>
                        <th>Institute/Board</th>
                        <th>CGPA/Percentage</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>B.Tech.</td>
                        <td>Indian Institute Of Technology, Jodhpur</td>
                        <td>08.20</td>
                        <td>2022-2026</td>
                    </tr>
                    <tr>
                        <td>Senior Secondary</td>
                        <td>RBSE Board</td>
                        <td>96.60%</td>
                        <td>2021</td>
                    </tr>
                    <tr>
                        <td>Secondary</td>
                        <td>RBSE Board</td>
                        <td>88.50%</td>
                        <td>2019</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}
