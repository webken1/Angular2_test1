import { RouterModule, Routes } from '@angular/router';
import{ModuleWithProviders} from '@angular/core'
import { Home }   from './component/page/Home';
import { About }   from './component/page/about';

const appRoutes:Routes = [ 
    {
    path:'',
    component:Home
    },
    {
        path:'about',
        component:About
    }
];

export const routing:ModuleWithProviders =RouterModule.forRoot(appRoutes);  

