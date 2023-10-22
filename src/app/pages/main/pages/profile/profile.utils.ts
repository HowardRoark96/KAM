import { UserGameHistoryDto, UserStatisticDto } from '@api/model';
import { ChartOptions } from '@widgets/chart';
import { COLORS } from '@utils/constants/color.constant';
import { Nullable } from '@customTypes/nullable.type';

export const getGameRatioChartOptions = (data: UserStatisticDto): ChartOptions => ({
  series: [data.wins || 0, data.defeats || 0],
  chart: {
    type: 'donut',
  },

  title: {
    text: 'Games ratio',
    style: {
      fontSize: '16px',
      fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: '75%',
      },
      offsetY: 20,
    },
  },
  dataLabels: {
    style: {
      fontSize: '16px',
      fontWeight: 500,
      fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
    },
    formatter: (val: number) => val.toFixed(0) + '%',
  },
  colors: [COLORS.SKY_BLUE_4, COLORS.BLUE_4],
  labels: ['Wins', 'Losses'],
  legend: {
    position: 'left',
    offsetY: 80,
  },
});

export const getRankChartOptions = (
  userData: Nullable<UserStatisticDto>,
  userGameData: Nullable<UserGameHistoryDto[]>,
  from?: Nullable<Date>,
  to?: Nullable<Date>,
): ChartOptions => {
  const categories = [];
  const toDate = to ?? new Date();
  const fromDate = from ?? new Date(toDate);

  fromDate.setUTCHours(0, 0, 0, 0);
  toDate.setUTCHours(0, 0, 0, 0);

  if (!from) fromDate.setUTCDate(toDate.getUTCDate() - 7);

  categories.push(new Date(fromDate).toISOString());

  while (toDate.getTime() >= fromDate.getTime()) {
    fromDate.setUTCDate(fromDate.getUTCDate() + 1);
    categories.push(new Date(fromDate).toISOString());
  }

  const series = getRankChartSeriesData(userGameData, categories, userData?.rank);

  return {
    series: [{ name: 'Games', data: series.map((item) => item.rank) }],
    chart: { type: 'area' },
    title: {
      text: 'Rank',
      style: {
        fontSize: '16px',
        fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
      },
    },
    stroke: { curve: 'smooth' },
    xaxis: { type: 'datetime', categories },
  };
};

export const getRankChartSeries = (
  userData: Nullable<UserStatisticDto>,
  userGameData: Nullable<UserGameHistoryDto[]>,
  from?: Nullable<Date>,
  to?: Nullable<Date>,
) => {
  const categories = [];
  const toDate = to ?? new Date();
  const fromDate = from ?? new Date(toDate);

  fromDate.setUTCHours(0, 0, 0, 0);
  toDate.setUTCHours(0, 0, 0, 0);

  if (!from) fromDate.setUTCDate(toDate.getUTCDate() - 7);

  categories.push(new Date(fromDate).toISOString());

  while (toDate.getTime() >= fromDate.getTime()) {
    fromDate.setUTCDate(fromDate.getUTCDate() + 1);
    categories.push(new Date(fromDate).toISOString());
  }

  return getRankChartSeriesData(userGameData, categories, userData?.rank);
};

const getRankChartSeriesData = (data: Nullable<UserGameHistoryDto[]>, categories: string[], rank: number = 0) => {
  const result: number[] = [];
  const result1: unknown[] = [];

  categories.forEach((date) => {
    const games = data?.filter((item) => new Date(item.date).getUTCDate() === new Date(date).getUTCDate()) || [];
    result.push(
      games.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.rankChange;
      }, 0),
    );
  });

  result.reduce((previousValue, currentValue) => {
    result1.push({ rank: previousValue, rankChange: currentValue });
    return previousValue - currentValue;
  }, rank);

  return result1;
};
