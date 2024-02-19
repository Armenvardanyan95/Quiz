import { Routes } from '@angular/router';

import { PageNotFoundComponent } from 'src/app/shared/components';
import { publicGuard } from 'src/app/public/guards';
import { authGuard } from 'src/app/private/guards';

const publicRoutes = () => import('./public/public.routes').then((m) => m.publicRoutes);
const privateRoutes = () => import('./private/private.routes').then((m) => m.privateRoutes);

export const routes: Routes = [
  {
    path: '',
    loadChildren: publicRoutes,
    canActivate: [ publicGuard ],
  },
  {
    path: '',
    loadChildren: privateRoutes,
    canActivate: [ authGuard ],
  },
  { path: 'non-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'non-found' },
];
