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
  const toDate = to ? new Date(to) : new Date();
  const fromDate = from ? new Date(from) : new Date(toDate);

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
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Rank',
      style: {
        fontSize: '16px',
        fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
      },
    },
    stroke: { curve: 'smooth', width: 1 },
    xaxis: {
      type: 'datetime',
      categories,
    },
    yaxis: {
      show: false,
    },
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
  const rankChanges: number[] = [];
  const result: { rank: number; rankChange: number }[] = [];

  categories.forEach((date) => {
    const games =
      data?.filter((item) => {
        const gameDate = new Date(item.date);

        gameDate.setUTCHours(0, 0, 0, 0);

        return gameDate.getTime() === new Date(date).getTime();
      }) || [];

    rankChanges.push(
      games.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.rankChange;
      }, 0),
    );
  });

  rankChanges.reduce((previousValue, currentValue) => {
    result.push({ rank: previousValue, rankChange: currentValue });
    return previousValue - currentValue;
  }, rank);

  return result;
};
