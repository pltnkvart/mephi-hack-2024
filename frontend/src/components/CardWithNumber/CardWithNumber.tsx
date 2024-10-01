import { Card, Text } from "@gravity-ui/uikit";
import styles from "./styles.module.css";

interface ICardWithNumberProps {
    title?: string;
    number?: number | string;
    icon?: React.ReactNode
}


export const CardWithNumber = ({ title, number, icon }: ICardWithNumberProps) => {
    return (
        <Card className={styles.card} type="container" view="outlined">
            <span className={styles.number}>{icon} {number}</span>
            <Text variant="subheader-2">{title}</Text>
        </Card>
    );
}