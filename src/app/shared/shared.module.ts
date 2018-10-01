import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialsModule } from "./angularmaterials/angular-materials.module";
import { FormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";
import { ChartModule } from "primeng/chart";
import { ComponentsModule } from "@shared/components/components.module";
import { PipesModule } from "@shared/pipes/pipes.module";


@NgModule({
  imports: [
    CommonModule,
    AngularMaterialsModule,
    FormsModule,
    ChartModule,
    ToastModule,
    ComponentsModule,
    PipesModule
  ],
  exports: [
    ComponentsModule
  ],
  declarations: [
   
  ]
})
/**SharedModule consists of common reusable components and module */
export class SharedModule {}
