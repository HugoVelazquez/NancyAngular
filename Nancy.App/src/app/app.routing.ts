﻿import { Routes } from '@angular/router';

//Components
import { HomeComponent } from './features/home/home.compoment';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/'}
];