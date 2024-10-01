import { Loader, Text } from "@gravity-ui/uikit";
import { useGetPrivelegesQuery, useGetStoreQuery, useGetUserByIdQuery } from "../../slices/api";
import styles from "./styles.module.css";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Balance } from "../../components/Balance/Balance";
import { StoreItem } from "../../components/StoreItem/StoreItem";

export const StorePage = () => {
    const { data: storeItems, isLoading: isLoadingStore } = useGetStoreQuery();
    const { data: privileges, isLoading: isLoadingPrivileges } = useGetPrivelegesQuery();
    const me = localStorage.getItem('userId') || '';
    const { data: userMe } = useGetUserByIdQuery(me);

    return (
        <PageLayout>
            <Balance balance={userMe?.balance} />
            <div className={styles.main}>
                <div className={styles.part}>
                    <Text variant="header-1" >Магазин</Text>
                    <div className={styles.container}>
                        {isLoadingStore ? <Loader /> :
                            storeItems?.map((item) => (
                                <StoreItem key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.part}>
                    <Text variant="header-1">Привилегии</Text>
                    <div className={styles.container}>
                        {isLoadingPrivileges ? <Loader /> :
                            privileges?.map((item) => (
                                <StoreItem key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
