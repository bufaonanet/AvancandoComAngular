import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminDashBoardComponent } from "./admin-dash-board/admin-dash-board.component";
import { AdminRoutingModule } from "./admin.route";

@NgModule({
  declarations: [
    AdminDashBoardComponent 
  ],
  imports: [
    CommonModule, 
    AdminRoutingModule
  ],
  exports: [
    
  ],
})
export class AdminModule {}
