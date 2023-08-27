import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarItem } from '@widgets/sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  readonly router = inject(Router);

  isCollapsed = false;

  SIDEBAR_MENU_ITEMS: SidebarItem[] = [
    { label: 'Home', icon: 'home', title: 'Home page', link: 'home' },
    { label: 'About', icon: 'file-search', title: 'About page', link: 'about' },
    { label: 'Media', icon: 'customer-service', title: 'Media page', link: 'media' },
    { label: 'FAQ', icon: 'bulb', title: 'FAQ page', link: 'faq' },
    { label: 'Download', icon: 'download', title: 'Download page', link: 'download' },
    { label: 'Contributing', icon: 'team', title: 'Contributing page', link: 'contributing' },
    { label: 'Links', icon: 'link', title: 'Links page', link: 'links' },
    { label: 'Contact', icon: 'contacts', title: 'Contact page', link: 'contact' },
    { label: 'Servers', icon: 'database', title: 'Servers page', link: 'servers' },
    { label: 'Devblog', icon: 'fork', title: 'Devblog page', link: 'devblog' },
  ];

  logout = () => {
    this.router.navigate(['../authorize']);
  };
}
