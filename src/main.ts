import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from './app/core/interceptor/error-handler.interceptor';

bootstrapApplication(AppComponent, appConfig
)
  .catch((err) => console.error(err));
