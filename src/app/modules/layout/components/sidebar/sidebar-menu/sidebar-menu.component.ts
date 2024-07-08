import { CommonModule, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuService } from '../../../services/menu.service';
import { SubMenuItem } from '../../../../../core/models/menu.model';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass,
    NgTemplateOutlet,
    CommonModule,
    SidebarSubmenuComponent,
    RouterLink,
    RouterLinkActive,
    AngularSvgIconModule
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent {

  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void {}
}
