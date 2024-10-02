import { PageLayout } from "../../components/PageLayout/PageLayout";
import { useGetUsersQuery } from "../../slices/api";
import { Table, TableColumnConfig, TableDataItem, withTableActions } from "@gravity-ui/uikit";
import { IUser } from "@shared/types/user";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const COLUMNS: TableColumnConfig<TableDataItem>[] = [
    { id: 'place', name: 'Место' },
    { id: 'name', name: 'ФИО' },
    { id: 'department', name: 'Отдел' },
    { id: 'rating', name: 'Рейтинг' },
];

const MyTable = withTableActions(Table);

export const RatingPage = () => {
    const navigate = useNavigate();
    const teamId = `Команда ${localStorage.getItem('teamId')}`;
    const { data: users } = useGetUsersQuery();

    const DATA_TOTAL = users?.slice().sort((a, b) => b.total_rating - a.total_rating).map((user: IUser, index) => {
        return {
            id: user.id,
            place: index + 1,
            name: `${user.name} ${user.surname}`,
            department: user.department,
            rating: user.total_rating
        };
    }) || [];

    const DATA_TEAM = users?.filter((user: IUser) => user.department === teamId).map((user: IUser, index) => {
        return {
            id: user.id,
            place: index + 1,
            name: `${user.name} ${user.surname}`,
            department: user.department,
            rating: user.total_rating
        };
    }) || [];

    return (
        <PageLayout>
            <div className={styles.wrapper}>
                <div className={styles.part}>
                    <Text variant="header-2" >Лоция</Text>
                    <MyTable
                        className={styles.table}
                        data={DATA_TOTAL}
                        columns={COLUMNS}
                        onRowClick={(item) => { navigate(`/users/${item.id}`) }}
                    />
                </div>
                <div className={styles.part}>
                    <Text variant="header-2" >{teamId}</Text>
                    <MyTable
                        className={styles.table}
                        data={DATA_TEAM}
                        columns={COLUMNS}
                        onRowClick={(item) => { navigate(`/users/${item.id}`) }}
                    />
                </div>
            </div>
        </PageLayout>
    );
}
