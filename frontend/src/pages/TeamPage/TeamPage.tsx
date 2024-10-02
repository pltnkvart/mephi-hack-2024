import { PageLayout } from "../../components/PageLayout/PageLayout";
import { Text } from "@gravity-ui/uikit";
import { settings } from '@gravity-ui/chartkit';
import { YagrPlugin } from '@gravity-ui/chartkit/yagr';
import { BurnDownRate } from "../../components/Charts/BurnDownRate";
import { TeamEngagementChart } from "../../components/Charts/TeamEngagementChart";
import { FlowEfficiencyChart } from "../../components/Charts/FlowEfficiencyChart";
import { TaskDistributionChart } from "../../components/Charts/TaskDistributionChart";
import styles from './styles.module.css';

settings.set({ plugins: [YagrPlugin] });

export const TeamPage = () => {
    return (
        <PageLayout>
            <Text variant="header-2" >Моя команда</Text>
            <div className={styles.flex}>
                <BurnDownRate />
                <TeamEngagementChart />
                <TaskDistributionChart />
                <FlowEfficiencyChart />
            </div>
        </PageLayout>
    );
}
