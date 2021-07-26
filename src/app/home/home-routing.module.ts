import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'rncs',
        loadChildren: () => import('../pages/rncs/rncs.module').then(m => m.RncsPageModule)
      },

      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
      },

      {
        path: 'favorites',
        loadChildren: () => import('../pages/favorites/favorites.module').then(m => m.FavoritesPageModule)
      },
      {
        path: '',
        redirectTo: 'rncs',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
