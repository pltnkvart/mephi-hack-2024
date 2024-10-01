import { useGetUserByIdQuery } from "../../slices/api";
import { useParams } from "react-router-dom";
import { UserCard } from "../../components/UserCard/UserCard";
import { PageLayout } from "../../components/PageLayout/PageLayout";

export const UserPage = () => {
    const { userId } = useParams();
    const { data: user, isLoading: isUserLoading } = useGetUserByIdQuery(String(userId))

    return (
        <PageLayout isLoading={isUserLoading}>
            <UserCard data={user} />
        </PageLayout>
    );
}