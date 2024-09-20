import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig, RenderMode } from '@angular/ssr';

import { appConfig } from './app.config';
import { todoServerRoutes as extraServerRoutes } from './todos.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig([
      { path: '', renderMode: RenderMode.Client },
      { path: 'about', renderMode: RenderMode.Server },
      ...extraServerRoutes
    ])
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
