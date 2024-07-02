import styles from './Btn.module.scss'

const Btn = (props) => {
    return (
        <button className={styles.btn}>
            {props.children}
        </button>
    )
}

export default Btn;