import { useState } from 'react';
import { IAchievement } from '@shared/types/user';
import styles from './styles.module.css';
import { Modal, Text } from '@gravity-ui/uikit';
import { Xmark } from '@gravity-ui/icons';

interface IAchievementProps {
    item: IAchievement;
}

export const Achievement = ({ item }: IAchievementProps) => {
    const [isModalAchievementOpen, setIsModalAchievementOpen] = useState(false);

    return (
        <>
            <Modal open={isModalAchievementOpen} onClose={() => setIsModalAchievementOpen(false)}>
                <div className={styles.modal}>
                    <Xmark className={styles.close} onClick={() => setIsModalAchievementOpen(false)} />
                    <img src={item.image} alt={item.name} className={styles.achievementImage} />
                    <div className={styles.info}>
                        <Text variant="header-1" color="primary">{item.name}</Text>
                        <Text variant="body-1" color="secondary">{item.description}</Text>
                    </div>
                </div>
            </Modal>
            <div className={styles.achievement}>
                <img src={item.image} alt={item.name} className={styles.achievementImage} onClick={() => setIsModalAchievementOpen(true)} />
                <Text variant="subheader-1" color="primary">{item.name}</Text>
            </div>
        </>
    );
}