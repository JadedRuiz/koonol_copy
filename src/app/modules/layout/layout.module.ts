import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  imports: [LayoutRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()],
})
export class LayoutModule {}