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
    const { data: users } = useGetUsersQuery();

    const DATA = users?.slice().sort((a, b) => b.total_rating - a.total_rating).map((user: IUser, index) => {
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
            <MyTable
                className={styles.table}
                data={DATA}
                columns={COLUMNS}
                onRowClick={(item) => { navigate(`/users/${item.id}`) }}
            />
        </PageLayout>
    );
}
