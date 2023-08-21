import { Component } from '@angular/core';
import { dashboardRoutesKey } from 'src/app/dashboard/dashboard.routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public get detalleUrl(): string {
    return `/${dashboardRoutesKey.detalle}`;
  }
  public get movimientosUrl(): string {
    return `/${dashboardRoutesKey.movimientos}`;
  }
}
