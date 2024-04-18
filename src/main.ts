import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideAnimations} from '@angular/platform-browser/animations';
import {mealsReducer} from "./app/store/meals/meals.reducer.";
import {HttpClientModule} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {PreloadAllModules, provideRouter, withDebugTracing, withPreloading} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {cartReducer} from "./app/store/cart/cart.reducer";
import {CartEffects} from "./app/store/cart/cart.effects";

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      meals: mealsReducer,
      cart: cartReducer
    }),
    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing(),
    ),
    provideEffects([CartEffects]), provideAnimations(),
    importProvidersFrom(HttpClientModule)],

});
