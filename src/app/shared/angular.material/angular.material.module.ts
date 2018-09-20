import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
