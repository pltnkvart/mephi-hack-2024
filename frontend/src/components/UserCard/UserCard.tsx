import { Button, Card, Text } from "@gravity-ui/uikit";
import { IUser } from "../../types/user";
import styles from "./styles.module.css";
import { useGetUserRatingQuery } from "../../slices/api";
import { CardWithNumber } from "../CardWithNumber/CardWithNumber";
import { Achievement } from "../Achievement/Achievement";
import { CodePullRequest, CodeCommit, Eye, CircleCheck, Clock, Bars } from '@gravity-ui/icons';
import { Balance } from "../Balance/Balance";
import { BalanceWithIcon } from "../Balance/BalanceWithIcon";

interface IUserCardProps {
    data?: IUser;
}

export const UserCard = ({ data }: IUserCardProps) => {
    const { data: rating } = useGetUserRatingQuery(data?.id || "", { skip: !data?.id });
    const isMe = data?.id === localStorage.getItem('userId');

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
                    <CardWithNumber title="Всего баллов" number={rating?.total_rating} />
                    <CardWithNumber title="Место в рейтинге" number={`#${data?.place}`} />
                </div>
                <div className={styles.part}>
                    <Text variant="header-1" >GitLab/GitHub</Text>
                    <div className={styles.git}>
                        <CardWithNumber title="Коммитов" number={rating?.commits} icon={<CodeCommit />} />
                        <CardWithNumber title="PR" number={rating?.pull_requests} icon={<CodePullRequest />} />
                        <CardWithNumber title="Ревью" number={rating?.reviews} icon={<Eye />} />
                    </div>
                </div>
                <div className={styles.part}>
                    <Text variant="header-1" >Задачи</Text>
                    <div className={styles.git}>
                        <CardWithNumber title="Выполнено" number={rating?.tasks_done} icon={<CircleCheck />} />
                        <CardWithNumber title="В процессе" number={rating?.tasks_in_progress} icon={<Clock />} />
                        <CardWithNumber title="Всего" number={rating?.tasks_total} icon={<Bars />} />
                    </div>
                </div>
                <div className={styles.part}>
                    <Text variant="header-1" >Ачивки</Text>
                    <Card type="container" view="outlined" className={styles.part}>
                        <div className={styles.achievements}>
                            {data?.achievements?.map((item, index) => (
                                <Achievement key={index} item={item} />
                            ))}
                        </div>
                    </Card>
                </div>
                {isMe && <div className={styles.part}>
                    <Text variant="header-1">Ежедневное задание</Text>
                    <Card type="container" view="outlined" className={styles.task}>
                        <Text variant="body-1">Купи слона</Text>
                        <Text variant="body-1">За выполнение задания: <BalanceWithIcon balance={10} /></Text>
                        <div className={styles.buttons}>
                            <Button
                                view="action"
                                size="m"
                            >
                                Выполнено
                            </Button>
                            <Button
                                view="normal"
                                size="m"
                            >
                                Другое задание
                            </Button>
                        </div>
                    </Card>
                </div>}
            </div>
        </Card >
    );
}