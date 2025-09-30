import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { ParrainagePage } from './parrainage/parrainage.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
      { path: 'paiement', loadComponent: () => import('./paiement/paiement.page').then( m => m.PaiementPage) },
      { path: 'children', loadComponent: () => import('./children/children.page').then( m => m.ChildrenPage)},
      { path: 'parametre', loadComponent: () => import('./parametre/parametre.page').then( m => m.ParametrePage) },
      {
        path: 'parrainage',
        component:ParrainagePage
      },
      {
        path: 'notifications',
        loadComponent: () => import('./notifications/notifications.page').then( m => m.NotificationsPage)
      },
    ]
  },
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
