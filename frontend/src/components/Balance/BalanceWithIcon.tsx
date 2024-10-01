import styles from "./styles.module.css";

interface IBalanceProps {
    balance?: number
}

export const BalanceWithIcon = ({ balance }: IBalanceProps) => {
    return (
        <div className={styles.withIcon}>
            <img width="24" height="24" src="https://img.icons8.com/pulsar-gradient/48/emerald.png" />
            {balance}
        </div>
    );
}