import { Card, Text } from "@gravity-ui/uikit";
import styles from "./styles.module.css";

interface IBalanceProps {
    balance?: number
}

export const Balance = ({ balance }: IBalanceProps) => {
    return (
        <Card className={styles.balance}>
            <Text variant="subheader-2">Баланс:</Text>
            <img width="24" height="24" src="https://img.icons8.com/pulsar-gradient/48/emerald.png" />
            {balance}
        </Card>
    );
}