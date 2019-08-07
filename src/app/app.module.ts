import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FeatureModule} from './feature/feature.module';
import {SharedModule} from './shared/shared.module';
import {FeatureRouting} from './feature/feature-routing';
import {ProductService} from './product.service';
import { LoginComponent } from './feature/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    SharedModule,
    FeatureRouting
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
