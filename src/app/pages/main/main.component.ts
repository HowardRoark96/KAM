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

  isCollapsed = true;

  SIDEBAR_MENU_ITEMS: SidebarItem[] = [
    {
      label: 'PAGE.ADMINISTRATION.LBL',
      title: 'PAGE.ADMINISTRATION.TTL',
      link: 'administration',
      icon: 'setting',
      children: [
        {
          label: 'PAGE.ADMINISTRATION.USERS.LBL',
          title: 'PAGE.ADMINISTRATION.USERS.TTL',
          link: 'administration/users',
          icon: 'team',
        },
        {
          label: 'PAGE.ADMINISTRATION.ROLES.LBL',
          title: 'PAGE.ADMINISTRATION.ROLES.TTL',
          link: 'administration/roles',
          icon: 'partition',
        },
        {
          label: 'PAGE.ADMINISTRATION.PERMISSIONS.LBL',
          title: 'PAGE.ADMINISTRATION.PERMISSIONS.TTL',
          link: 'administration/permissions',
          icon: 'tool',
        },
      ],
    },
    { label: 'PAGE.NEWS.LBL', icon: 'solution', title: 'PAGE.NEWS.TTL', link: 'news' },
    { label: 'PAGE.ABOUT.LBL', icon: 'file-search', title: 'PAGE.ABOUT.TTL', link: 'about' },
    { label: 'PAGE.MEDIA.LBL', icon: 'customer-service', title: 'PAGE.MEDIA.TTL', link: 'media' },
    { label: 'PAGE.FAQ.LBL', icon: 'bulb', title: 'PAGE.FAQ.TTL', link: 'faq' },
    { label: 'PAGE.DOWNLOAD.LBL', icon: 'download', title: 'PAGE.DOWNLOAD.TTL', link: 'download' },
    { label: 'PAGE.CONTRIBUTING.LBL', icon: 'team', title: 'PAGE.CONTRIBUTING.TTL', link: 'contributing' },
    { label: 'PAGE.LINKS.LBL', icon: 'link', title: 'PAGE.LINKS.TTL', link: 'links' },
    { label: 'PAGE.CONTACTS.LBL', icon: 'contacts', title: 'PAGE.CONTACTS.TTL', link: 'contact' },
    { label: 'PAGE.SERVERS.LBL', icon: 'database', title: 'PAGE.SERVERS.TTL', link: 'servers' },
    { label: 'PAGE.DEVBLOG.LBL', icon: 'fork', title: 'PAGE.DEVBLOG.TTL', link: 'devblog' },
  ];

  logout = () => {
    this.router.navigate(['../authorize']);
  };
}
