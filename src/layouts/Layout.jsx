// style 
import styles from "./Layout.module.css";

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Crypto App</h1>
            <div>
                <p><a href="https://react.dev" target="_blank">Siram</a> | A smooth and accurate crypto</p>
            </div>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by Majid with 💖</p>
        </footer>
    </>
  )
}

export default Layout