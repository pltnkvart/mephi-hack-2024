import { Button, Card, Text, useToaster } from "@gravity-ui/uikit"
import { IStoreItem } from "@shared/IStoreItem"
import styles from "./styles.module.css"
import { useBuyItemMutation } from "../../slices/api"
import { addNotification } from "../../helpers"

interface IStoreItemProps {
    item: IStoreItem,
}

export const StoreItem = ({ item }: IStoreItemProps) => {
    const { add } = useToaster();
    const [buyItem, { isLoading }] = useBuyItemMutation();
    const me = localStorage.getItem('userId') || '';

    const handleBuyClick = (itemId: string) => {
        try {
            buyItem({ userId: me, itemId: itemId }).unwrap().then(() => {
                addNotification(add, true, 'Поздравляем!', "Вы успешно купили предмет! Можете забрать его в офисе");
            });
        } catch (err) {
            addNotification(add, false, 'Ошибка!', err as string);
        }
    }

    return (
        <Card className={styles.card} type="container" view={item.quantity === 0 ? 'filled' : 'raised'}>
            <img src={item.image} className={styles.image} width={24} height={24} />
            <div className={styles.info}>
                <div className={styles.price}>
                    <Text variant="header-2" color="primary">{item.price}</Text>
                    <img width="24" height="24" src="https://img.icons8.com/pulsar-gradient/48/emerald.png" />
                </div>
                <Text variant="subheader-2" color="primary">{item.title}</Text>
                <Text variant="body-1" color="primary">{item.description}</Text>
                <Text variant="body-1" color="secondary">Кол-во: {item.quantity}</Text>
            </div>
            <Button
                view="action"
                size="m"
                onClick={() => handleBuyClick(item.id)}
                className={styles.button}
                loading={isLoading}
                disabled={item.quantity === 0}
            >
                Купить
            </Button>
        </Card>
    )
}