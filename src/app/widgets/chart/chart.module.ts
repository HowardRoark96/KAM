import { NgModule } from '@angular/core';
import { ChartComponent } from '@widgets/chart/chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ExecuteWithModule } from '@pipes/execute-with';
import { NgIf } from '@angular/common';

@NgModule({
  imports: [NgApexchartsModule, ExecuteWithModule, NgIf],
  exports: [ChartComponent],
  declarations: [ChartComponent],
})
export class ChartModule {}
