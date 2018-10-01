import { NgModule } from '@angular/core';
import { MainLayoutModule } from '@shared/layout/main-layout/main-layout.module';
import { AuthLayoutModule } from '@shared/layout/auth-layout/auth-layout.module';


@NgModule({
  imports: [
    MainLayoutModule,
    AuthLayoutModule
  ],
  declarations: []
})
export class LayoutModule { }
