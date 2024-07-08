import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from './core/interceptor/error-handler.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { authInterceptor } from './core/interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withInterceptors([authInterceptor, errorHandlerInterceptor])), 
  importProvidersFrom(BrowserModule, AppRoutingModule)]
};
