import { enableProdMode, NgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: () => bootstrapApplication(AppComponent, {
    providers: [
      getSingleSpaExtraProviders(),
      provideRouter(routes)
    ],
  }),
  template: '<app-root />',
  NgZone: NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
