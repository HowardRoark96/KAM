import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  tabs = [
    { label: 'Home', link: 'home' },
    { label: 'About', link: 'about' },
    { label: 'Media', link: '' },
    { label: 'FAQ', link: '' },
    { label: 'Download', link: '' },
    { label: 'Contributing', link: '' },
    { label: 'Links', link: '' },
    { label: 'Contact', link: '' },
    { label: 'Servers', link: '' },
    { label: 'Developer blog', link: '' },
  ];

  theme: ThemePalette = 'primary';
}
