import styles from "./layout.module.css"

export default function Layout({ children }) {
    return <dev className={styles.container}>{ children }</dev>
}