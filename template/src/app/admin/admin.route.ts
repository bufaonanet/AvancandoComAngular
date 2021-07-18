import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashBoardComponent } from "./admin-dash-board/admin-dash-board.component";

const adminRouterConfig: Routes = [
  { path: "", component: AdminDashBoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(adminRouterConfig)],
  exports:[RouterModule]
})
export class AdminRoutingModule {}
