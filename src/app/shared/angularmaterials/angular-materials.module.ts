import { NgModule } from "@angular/core";
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule
} from "@angular/material";

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatCardModule],
  exports: [MatInputModule, MatButtonModule, MatCardModule]
})
export class AngularMaterialsModule {}
