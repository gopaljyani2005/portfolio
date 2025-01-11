"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/form.module.css";
export default function sendmail(){
    const [Username,setUsername] = useState("");
    const [email,setemail] = useState("");
    const [message,setmessage] = useState("");
    function loginfunct(){
        alert("message is send successfully");
        setUsername("");
        setemail("");
        setmessage("");

    }
    return(
        <main className={styles.page}>
            <h1>Login</h1>
            <form className={styles.form} onSubmit={loginfunct}>
                <label htmlFor="Username">Username</label>
                <input
                    type="text"
                    id="Username"
                    name="Username"
                    placeholder="username"
                    required
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    required
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />

                <label htmlFor="message">Message</label>
                <input
                    type="text"
                    id="message"
                    name="message"
                    placeholder="message"
                    required
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </main>
    )
}