/**
 * Created by wenpeng.guo on 9/23/16.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {AccordionComponent} from './accordion.component';
import {ButtonComponent} from './button.component';

const appRoutes: Routes = [
    {
        path: 'accordion',
        component: AccordionComponent
    },
    {
        path: 'button',
        component: ButtonComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);