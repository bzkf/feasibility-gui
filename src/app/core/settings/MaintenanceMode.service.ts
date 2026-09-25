import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class MaintenanceModeService {
  private maintenanceMode = false
  private maintenanceEndDate: string | null = null

  public setMaintenanceMode(enabled: boolean): void {
    this.maintenanceMode = enabled
  }

  public setMaintenanceEndDate(endDate: string | null): void {
    this.maintenanceEndDate = endDate
  }

  public isMaintenanceMode(): boolean {
    return this.maintenanceMode
  }

  public getMaintenanceEndDate(): string | null {
    return this.maintenanceEndDate
  }
}
