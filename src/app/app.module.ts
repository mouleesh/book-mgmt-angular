import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routedComponents } from './app.routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@shared/layout/layout.module';
import { AuthGuardService } from './service/auth/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule 
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
/**Root Module*/
export class AppModule { }
