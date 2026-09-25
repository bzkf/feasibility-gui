import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { MaintenanceModeService } from '../settings/MaintenanceMode.service'

export const maintenanceGuard: CanActivateFn = () => {
  const router = inject(Router)
  const maintenanceModeService = inject(MaintenanceModeService)

  if (maintenanceModeService.isMaintenanceMode()) {
    return router.createUrlTree(['/maintenance'])
  }

  return true
}
