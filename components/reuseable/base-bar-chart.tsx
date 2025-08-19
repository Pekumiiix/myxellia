import { BarChart, XAxis, type XAxisProps, YAxis, type YAxisProps } from 'recharts';
import type { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import { type ChartConfig, ChartContainer } from '../ui/chart';

export function BasebarChartWrapper({
  config,
  data,
  chartProps,
  Xaxis,
  Yaxis,
  classNames,
  children,
}: IBaseBarChartProps) {
  return (
    <ChartContainer
      config={config}
      className={classNames.container}
    >
      <BarChart
        data={data}
        accessibilityLayer
        barGap={3}
        barSize={4}
        barCategoryGap={18}
        {...chartProps}
      >
        <XAxis
          {...Xaxis}
          tickLine={false}
          axisLine={false}
          className={classNames.axis}
        />
        <YAxis
          {...Yaxis}
          tickLine={false}
          className={classNames.axis}
        />
        {children}
      </BarChart>
    </ChartContainer>
  );
}

interface IBaseBarChartProps {
  config: ChartConfig;
  data: CategoricalChartProps['data'];
  chartProps: Partial<CategoricalChartProps>;
  classNames: { axis?: string; container?: string };
  Xaxis: Partial<XAxisProps>;
  Yaxis: Partial<YAxisProps>;
  children: React.ReactNode;
}
