import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Nullable } from '@customTypes/nullable.type';
import { getUserMockedData } from '@utils/mocked-data/user.constant';
import { NewsDataInterface } from '../news-card/news-card.component';
import { DomSanitizer } from '@angular/platform-browser';
import { delay, of, tap } from 'rxjs';
import { NotificationService } from '@services/notification';

@Component({
  selector: 'app-modal-create-news',
  templateUrl: './modal-create-news.component.html',
  styleUrls: ['./modal-create-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCreateNewsComponent {
  form = new FormGroup({
    title: new FormControl<Nullable<string>>(null, Validators.required),
    content: new FormControl<Nullable<string>>(null, Validators.required),
  });

  constructor(
    private readonly modal: NzModalRef,
    private readonly domSanitizer: DomSanitizer,
    private readonly notificationService: NotificationService,
  ) {}

  getValue = (value: Nullable<string>) => this.domSanitizer.bypassSecurityTrustHtml(value || '');

  getPreview = (title: Nullable<string>, content: Nullable<string>): NewsDataInterface => ({
    title,
    contentTitle: '',
    time: new Date().toISOString(),
    contentDescription: content || null,
    user: getUserMockedData().data,
    comments: [],
  });

  closeModal = () => this.modal.destroy();

  create$ = () => {
    if (this.form.invalid)
      return Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

    return of(this.form.value).pipe(
      delay(3000),
      tap(this.notificationService.onSuccess({ content: 'News created successfully.' })),
      tap((value) => {
        const news = {
          title: value.title,
          contentTitle: '',
          time: new Date().toISOString(),
          contentDescription: value.content,
          user: getUserMockedData().data,
          comments: [],
        };

        this.modal.close(news);
      }),
    );
  };
}
