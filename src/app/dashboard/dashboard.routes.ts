import { Routes } from "@angular/router";
import { EstadisticaComponent } from "./estadistica/estadistica.component";
import { IngresoEgresoComponent } from "./ingreso-egreso/ingreso-egreso.component";
import { DetalleComponent } from "./detalle/detalle.component";

export enum dashboardRoutesKey {
  estadistica = "",
  detalle = "detalle",
  movimientos = "movimientos"

}

export const dashboardRoutes: Routes = [
  { path: dashboardRoutesKey.estadistica, component: EstadisticaComponent },
  { path: dashboardRoutesKey.movimientos, component: IngresoEgresoComponent },
  { path: dashboardRoutesKey.detalle, component: DetalleComponent }
];
