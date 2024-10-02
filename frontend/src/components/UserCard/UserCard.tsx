import { Button, Card, Text } from "@gravity-ui/uikit";
import { IUser } from "@shared/IUser";
import styles from "./styles.module.css";
import { useGetUserRatingQuery } from "../../slices/api";
import { CardWithNumber } from "../CardWithNumber/CardWithNumber";
import { Achievement } from "../Achievement/Achievement";
import { CodePullRequest, CodeCommit, Eye, CircleCheck, Clock, Bars } from '@gravity-ui/icons';
import { Balance } from "../Balance/Balance";
import { BalanceWithIcon } from "../Balance/BalanceWithIcon";
import { useState } from "react";

interface IUserCardProps {
    data?: IUser;
}

interface IDayilyTask {
    id: number;
    text: string;
    price: number;
}

const DAILY_TASKS: IDayilyTask[] = [
    {
        id: 1,
        text: "Проверьте код в репозитории и проведите ревью",
        price: 80
    },
    {
        id: 2,
        text: "Напишите тесты для нового функционала",
        price: 100
    },
    {
        id: 3,
        text: "Почистите и обновите документацию проекта",
        price: 60
    },
    {
        id: 4,
        text: "Сделайте деплой на тестовую среду",
        price: 90
    },
    {
        id: 5,
        text: "Исправьте баги из задач трекера",
        price: 75
    },
    {
        id: 6,
        text: "Проведите утренний стендап",
        price: 50
    },
    {
        id: 7,
        text: "Оптимизируйте производительность сервиса",
        price: 120
    },
    {
        id: 8,
        text: "Проверьте логи и устраните ошибки",
        price: 70
    },
    {
        id: 9,
        text: "Напишите скрипты для автоматизации задач",
        price: 110
    },
    {
        id: 10,
        text: "Обновите версии зависимостей проекта",
        price: 65
    }
];

export const UserCard = ({ data }: IUserCardProps) => {
    const { data: rating } = useGetUserRatingQuery(data?.id || "", { skip: !data?.id });
    const [maxRetries, setMaxRetries] = useState(3);
    const [dailyTask, setDailyTask] = useState<IDayilyTask>(DAILY_TASKS[0]);
    const isMe = data?.id === localStorage.getItem('userId');

    const handleChangeDailyTaskClick = () => {
        if (maxRetries > 0) {
            const index = Math.floor(Math.random() * DAILY_TASKS.length);
            setMaxRetries(maxRetries - 1);
            setDailyTask(DAILY_TASKS[index]);
        }
    }

    const handleTaskComplete = () => { }

    return (
        <Card type="container" view="raised" className={styles.card}>
            <div className={styles.user}>
                <img src={data?.avatar} alt={data?.name} className={styles.avatar} />
                <Text variant="header-2" >{data?.name} {data?.surname}</Text>
                <>
                    <Text variant="body-1" color="secondary">О себе: {data?.bio}</Text>

                    <Text variant="body-1" color="secondary">{data?.jobTitle}</Text>
                    <Text variant="body-1" color="secondary">{data?.department}</Text>

                    <Text variant="body-1" color="secondary">{data?.email}</Text>
                    <Text variant="body-1" color="secondary">{data?.telegram}</Text>
                </>
            </div>
            <div className={styles.rating}>
                {isMe && <Balance balance={data?.balance} />}
                <div className={styles.git}>
                    <CardWithNumber title="Всего баллов" number={rating?.total_rating} haveProgressCirle={false} />
                    <CardWithNumber title="Место в рейтинге" number={data?.place} haveProgressCirle={false} />
                </div>
                <div className={styles.part}>
                    <Text variant="header-1" >GitLab/GitHub</Text>
                    <div className={styles.git}>
                        <CardWithNumber title="Коммитов" number={rating?.commits} icon={<CodeCommit />} haveProgressCirle={false} />
                        <CardWithNumber title="PR" number={rating?.pull_requests} icon={<CodePullRequest />} haveProgressCirle={false} />
                        <CardWithNumber title="Ревью" number={rating?.reviews} icon={<Eye />} haveProgressCirle={false} />
                    </div>
                </div>
                <div className={styles.part}>
                    <Text variant="header-1" >Задачи</Text>
                    <div className={styles.git}>
                        <CardWithNumber title="Выполнено" number={rating?.tasks_done} icon={<CircleCheck />} />
                        <CardWithNumber title="Ожидает" number={rating?.tasks_in_progress} icon={<Clock />} />
                        <CardWithNumber title="Всего" number={rating?.tasks_total} icon={<Bars />} />
                    </div>
                </div>
                <div className={styles.part}>
                    <Text variant="header-1" >Ачивки</Text>
                    // TODO
                    {/* <Card type="container" view="outlined" className={styles.part}>
                        <div className={styles.achievements}>
                            {data?.achievements?.map((item, index) => (
                                <Achievement key={index} item={item} />
                            ))}
                        </div>
                    </Card> */}
                </div>
                {isMe && <div className={styles.part}>
                    <Text variant="header-1">Ежедневное задание</Text>
                    <Card type="container" view="outlined" className={styles.task}>
                        <div className={styles.leftTask}>
                            <Text variant="subheader-1">{dailyTask.text}</Text>
                            <Text variant="body-1" className={styles.inline}>За выполнение задания: <BalanceWithIcon balance={dailyTask.price} /></Text>
                        </div>
                        <div className={styles.buttons}>
                            <Button
                                view="normal"
                                size="m"
                                onClick={handleChangeDailyTaskClick}
                            >
                                Другое задание: Попыток: {maxRetries}
                            </Button>
                            <Button
                                view="action"
                                size="m"
                                onClick={handleTaskComplete}
                            >
                                Выполнено
                            </Button>
                        </div>
                    </Card>
                </div>}
            </div>
        </Card >
    );
}