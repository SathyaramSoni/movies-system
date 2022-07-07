import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { movieReducer } from './state/movie.reducer';
import { MovieEffects } from './state/movie.effects';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [AppComponent, HomeComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ data: movieReducer }),
    EffectsModule.forRoot([MovieEffects]),
    NgxShimmerLoadingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
