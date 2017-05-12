import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { ListsComponent } from './lists/lists.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }, {
    path: 'main',
    component: MainComponent
  }, {
    path: 'lists',
    component: ListsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
