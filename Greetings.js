import styles from "./Greeting.module.css"
function greetings() {
    return (
        <>
            <h1>Greet, Erthlings</h1>
            <h3 className={styles.App}>Sssupp!</h3>
        </>
    )
}

export default greetings;