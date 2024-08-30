import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { BetterLoggerService } from './services/better-logger.service';
import { LoggerService } from './services/logger.service';
import { DashboardService } from './services/dashboard.service';
import { DashboardServiceFactory } from './factory/dashboard-service-factory';
import { UserService } from './services/user.service';

export const BASE_URL = new InjectionToken<string>('BASE_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LoggerService, useExisting: BetterLoggerService },
    { provide: DashboardService, useFactory: DashboardServiceFactory, deps: [UserService]},
    { provide: BASE_URL, useValue: 'anUrl'},
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()),
  ],
};
