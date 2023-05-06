import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';
import { INoRowsOverlayParams } from 'ag-grid-community';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@Component({
  selector: 'app-no-rows-overlay',
  templateUrl: './no-rows-overlay.component.html',
  styleUrls: [`./no-rows-overlay.component.scss`],
  standalone: true,
  imports: [NzEmptyModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoRowsOverlayComponent implements INoRowsOverlayAngularComp {
  params!: INoRowsOverlayParams;

  agInit(params: INoRowsOverlayParams) {
    this.params = params;
  }
}
