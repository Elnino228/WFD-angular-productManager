import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooBarComponent} from './foo-bar/foo-bar.component';
import {HeaderComponent} from './header/header.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {FeatureRouting} from '../feature/feature-routing';


@NgModule({
  declarations: [
    FooBarComponent,
    HeaderComponent,
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    FeatureRouting
  ],
  exports: [
    FooBarComponent,
    HeaderComponent,
    TopBarComponent,
  ]
})
export class SharedModule {
}
