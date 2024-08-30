import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { BetterLoggerService } from './services/better-logger.service';
import { LoggerService } from './services/logger.service';

export const appConfig: ApplicationConfig = {
  providers: [

      {provide: LoggerService, useExisting: BetterLoggerService},

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()),
  ],
};
