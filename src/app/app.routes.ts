import { MapComponent } from './map/map.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { Routes } from "@angular/router";
import { LayoutComponent } from './layout/layout.component';
import { NotMapComponent } from './not-map/not-map.component';

export const appRoutes: Routes = [  
    { path: '', component: LayoutComponent,
        children: [
            { path: '', component: MapComponent},
            { path: 'notmap', component: NotMapComponent }
        ] },  
    {
        path: '',
        component: ListViewComponent,
        outlet: 'sidenav'
    },
    {
        path: 'list',
        component: ListViewComponent,
        outlet: 'sidenav'
    },
    {
        path: 'details',
        component: DetailViewComponent,
        outlet: 'sidenav'
    },
];
  