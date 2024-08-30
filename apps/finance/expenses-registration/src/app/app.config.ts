import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { BetterLoggerService } from './services/better-logger.service';
import { LoggerService } from './services/logger.service';
import { DashboardService } from './services/dashboard.service';
import { DashboardServiceFactory } from './factory/dashboard-service-factory';
import { UserService } from './services/user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LoggerService, useExisting: BetterLoggerService },
    { provide: DashboardService, useFactory: DashboardServiceFactory, deps: [UserService]},
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()),
  ],
};
