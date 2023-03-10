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
    { label: 'Media', link: 'media' },
    { label: 'FAQ', link: 'faq' },
    { label: 'Download', link: 'download' },
    { label: 'Contributing', link: 'contributing' },
    { label: 'Links', link: 'links' },
    { label: 'Contact', link: 'contact' },
    { label: 'Servers', link: 'servers' },
    { label: 'Devblog', link: 'devblog' },
  ];

  theme: ThemePalette = 'primary';
}
