import { AppLayoutComponent } from './layout/components/app-layout/app-layout.component'
import { Component, inject, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TabTitleService } from './service/TabTitle.service'
import { MaintenanceModeService } from './core/settings/MaintenanceMode.service'

@Component({
  selector: 'num-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [AppLayoutComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  private tabTitleService1 = inject(TabTitleService)
  private maintenanceModeService = inject(MaintenanceModeService)

  title = 'num-portal-webapp'
  constructor() {}

  get isMaintenanceMode(): boolean {
    return this.maintenanceModeService.isMaintenanceMode()
  }

  ngOnInit() {
    if (!this.maintenanceModeService.isMaintenanceMode()) {
      this.tabTitleService1.initializeTitleListener()
    }
  }
}
