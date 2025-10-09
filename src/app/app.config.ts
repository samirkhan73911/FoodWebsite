import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoaderInterceptor } from './core/intercefters/loadinginterceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptors([LoaderInterceptor] )),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),provideAnimations()]
};
