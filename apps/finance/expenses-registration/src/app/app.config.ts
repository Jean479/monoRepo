import { ApplicationConfig, InjectionToken, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { BetterLoggerService } from './services/better-logger.service';
import { LoggerService } from './services/logger.service';
import { DashboardService } from './services/dashboard.service';
import { DashboardServiceFactory } from './factory/dashboard-service-factory';
import { UserService } from './services/user.service';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { getBrowserLang, provideTransloco } from '@jsverse/transloco';

export const BASE_URL = new InjectionToken<string>('BASE_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LoggerService, useExisting: BetterLoggerService },
    { provide: DashboardService, useFactory: DashboardServiceFactory, deps: [UserService]},
    { provide: BASE_URL, useValue: 'anUrl'},
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()), provideHttpClient(), provideTransloco({
        config: { 
          availableLangs: ['en', 'fr', 'gb'],
          defaultLang: getBrowserLang() ?? 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      }),
  ],
};
