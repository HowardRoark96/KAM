import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { NgStyleInterface } from 'ng-zorro-antd/core/types/ng-class';
import { NzSizeDSType } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() bodyStyle: NgStyleInterface | null = null;
  @Input() isBorderless = false;
  @Input() cover?: TemplateRef<void>;
  @Input() extraBtn?: string | TemplateRef<void>;
  @Input() isHoverable = false;
  @Input() cardTitle?: string | TemplateRef<void>;
  @Input() isLoading = false;
  @Input() type: string | 'inner' | null = null;
  @Input() size: NzSizeDSType = 'default';
  @Input() actions: Array<TemplateRef<void>> = [];

  @Input() contentTitle: string | TemplateRef<void> | null = null;
  @Input() contentDescription: string | TemplateRef<void> | null = null;
  @Input() contentAvatar: TemplateRef<void> | null = null;
}
