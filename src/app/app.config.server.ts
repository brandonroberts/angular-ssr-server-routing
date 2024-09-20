import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig, RenderMode } from '@angular/ssr';

import { appConfig } from './app.config';
import { todoServerRoutes as extraServerRoutes } from './todos.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig([
      { path: '', renderMode: 2 },
      { path: 'about', renderMode: 1 },
      ...extraServerRoutes
    ])
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
