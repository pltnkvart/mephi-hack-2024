import { Card, Text } from "@gravity-ui/uikit";
import styles from "./styles.module.css";
import { Progress } from "antd";

interface ICardWithNumberProps {
    title?: string;
    number?: number;
    icon?: React.ReactNode;
    haveProgressCirle?: boolean
}


export const CardWithNumber = ({ title, number, icon, haveProgressCirle = true }: ICardWithNumberProps) => {
    return (
        <Card className={styles.card} type="container" view="outlined">
            {haveProgressCirle ?
                <Progress type="circle" percent={number} format={() => `${number}`} /> :
                <Text variant="header-2" className={styles.number}>{number}</Text>
            }
            <Text variant="subheader-2" className={styles.text}>{icon} {title}</Text>
        </Card>
    );
}