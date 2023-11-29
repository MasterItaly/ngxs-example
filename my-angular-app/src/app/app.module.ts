// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from "@ngxs/store";
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';
import { AppConfigComponent } from './components/app-config/app-config.component';
import { FormsModule } from '@angular/forms';
import { UserState } from './states/user/user.state';
import { ProductState } from './states/product/product.state';
import { AppConfigState } from './states/app-config/app-config.state';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    AppConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([UserState, ProductState, AppConfigState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
