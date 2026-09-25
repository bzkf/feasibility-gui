import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { MaintenanceModeService } from '../../core/settings/MaintenanceMode.service'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'num-app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
})
export class MaintenanceComponent {
  private maintenanceModeService = inject(MaintenanceModeService)

  public get maintenanceEndDate(): string | null {
    return this.maintenanceModeService.getMaintenanceEndDate()
  }
}
