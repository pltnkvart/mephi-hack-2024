import { Text } from "@gravity-ui/uikit";
import ChartKit from '@gravity-ui/chartkit';
import type { YagrWidgetData } from '@gravity-ui/chartkit/yagr';
import styles from './styles.module.css';

const data: YagrWidgetData = {
    data: {
        timeline: [
            1693699200000, 1693785600000, 1693872000000, 1693958400000, 1694044800000, 1694131200000,
            1694217600000, 1694304000000, 1694390400000,
        ],
        graphs: [
            {
                id: '0',
                name: 'Ожидаемый показатель',
                color: 'rgba(255, 200, 92, 0.2)',
                data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1),
            },
            {
                id: '1',
                name: 'Фактический',
                color: 'rgba(255, 190, 92, 0.2)',
                data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1),
            },
        ],
    },
    libraryConfig: {
        chart: {
            series: {
                type: 'area',
            },
        },
        title: {
            text: 'Burn-down Chart (График выполнения задач)',
        },
    },
};

export const BurnDownRate = () => {
    return (
        <div className={styles.chart}>
            <ChartKit type="yagr" data={data} />
            <Text variant="body-1" color="secondary">Формула: Общее количество задач открытых - Сумма выполненных задач за день</Text>
        </div>
    );
}
