import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  ApexAnnotations,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexForecastDataPoints,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNoData,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexStroke,
  ApexTheme,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts/lib/model/apex-types';
import { Nullable } from '@customTypes/nullable.type';
import { Observable } from 'rxjs';

export interface ChartOptions {
  chart: ApexChart;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;

  annotations?: Nullable<ApexAnnotations>;
  colors?: Nullable<string[]>;
  dataLabels?: Nullable<ApexDataLabels>;
  stroke?: Nullable<ApexStroke>;
  labels?: Nullable<string[]>;
  legend?: Nullable<ApexLegend>;
  markers?: Nullable<ApexMarkers>;
  noData?: Nullable<ApexNoData>;
  fill?: Nullable<ApexFill>;
  tooltip?: Nullable<ApexTooltip>;
  plotOptions?: Nullable<ApexPlotOptions>;
  responsive?: Nullable<ApexResponsive[]>;
  xaxis?: Nullable<ApexXAxis>;
  yaxis?: Nullable<ApexYAxis | ApexYAxis[]>;
  forecastDataPoints?: Nullable<ApexForecastDataPoints>;
  grid?: Nullable<ApexGrid>;
  states?: Nullable<ApexStates>;
  title?: Nullable<ApexTitleSubtitle>;
  subtitle?: Nullable<ApexTitleSubtitle>;
  theme?: Nullable<ApexTheme>;
  autoUpdateSeries?: Nullable<boolean>;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
  @Input() chartOptions: Nullable<ChartOptions>;

  @Input() animationEnd?: (chart: unknown, options?: unknown) => void;
  @Input() beforeMount?: (chart: unknown, options?: unknown) => void;
  @Input() mounted?: (chart: unknown, options?: unknown) => void;
  @Input() updated?: (chart: unknown, options?: unknown) => void;
  @Input() mouseMove?: (e: unknown, chart?: unknown, options?: unknown) => void;
  @Input() mouseLeave?: (e: unknown, chart?: unknown, options?: unknown) => void;
  @Input() click?: (e: unknown, chart?: unknown, options?: unknown) => void;
  @Input() legendClick?: (chart: unknown, seriesIndex?: number, options?: unknown) => void;
  @Input() markerClick?: (e: unknown, chart?: unknown, options?: unknown) => void;
  @Input() xAxisLabelClick?: (e: unknown, chart?: unknown, options?: unknown) => void;
  @Input() selection?: (chart: unknown, options?: unknown) => void;
  @Input() dataPointSelection?: (e: unknown, chart?: unknown, options?: unknown) => void;
  @Input() dataPointMouseEnter?: (e: unknown, chart?: unknown, options?: unknown) => void;
  @Input() dataPointMouseLeave?: (e: unknown, chart?: unknown, options?: unknown) => void;
  @Input() beforeZoom?: (chart: unknown, options?: unknown) => void;
  @Input() beforeResetZoom?: (chart: unknown, options?: unknown) => void;
  @Input() zoomed?: (chart: unknown, options?: unknown) => void;
  @Input() scrolled?: (chart: unknown, options?: unknown) => void;
  @Input() brushScrolled?: (chart: unknown, options?: unknown) => void;

  private _chartSeries$: Nullable<Observable<ApexAxisChartSeries | ApexNonAxisChartSeries>>;

  updateChartOptions = (chartOptions: Nullable<ChartOptions>) => {
    if (!chartOptions?.chart) return;

    chartOptions.chart = {
      ...chartOptions.chart,
      events: {
        animationEnd: this.animationEnd,
        beforeMount: this.beforeMount,
        mounted: this.mounted,
        updated: this.updated,
        mouseMove: this.mouseMove,
        mouseLeave: this.mouseLeave,
        click: this.click,
        legendClick: this.legendClick,
        markerClick: this.markerClick,
        xAxisLabelClick: this.xAxisLabelClick,
        selection: this.selection,
        dataPointSelection: this.dataPointSelection,
        dataPointMouseEnter: this.dataPointMouseEnter,
        dataPointMouseLeave: this.dataPointMouseLeave,
        beforeZoom: this.beforeZoom,
        beforeResetZoom: this.beforeResetZoom,
        zoomed: this.zoomed,
        scrolled: this.scrolled,
        brushScrolled: this.brushScrolled,
      },
    };
  };
}
