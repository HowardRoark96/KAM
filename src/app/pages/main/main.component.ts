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
    { label: 'page.home', icon: 'home', title: 'Home page', link: 'home' },
    { label: 'page.about', icon: 'file-search', title: 'About page', link: 'about' },
    { label: 'page.media', icon: 'customer-service', title: 'Media page', link: 'media' },
    { label: 'page.faq', icon: 'bulb', title: 'FAQ page', link: 'faq' },
    { label: 'page.download', icon: 'download', title: 'Download page', link: 'download' },
    { label: 'page.contributing', icon: 'team', title: 'Contributing page', link: 'contributing' },
    { label: 'page.links', icon: 'link', title: 'Links page', link: 'links' },
    { label: 'page.contact', icon: 'contacts', title: 'Contact page', link: 'contact' },
    { label: 'page.servers', icon: 'database', title: 'Servers page', link: 'servers' },
    { label: 'page.devblog', icon: 'fork', title: 'Devblog page', link: 'devblog' },
  ];

  logout = () => {
    this.router.navigate(['../authorize']);
  };
}
