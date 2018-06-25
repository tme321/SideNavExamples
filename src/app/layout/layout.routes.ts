import { MapComponent } from './../map/map.component';
import { Routes, RouterModule } from "@angular/router";
import { NotMapComponent } from '../not-map/not-map.component';

export const layoutRoutes: Routes = [    
    { path: 'map', component: MapComponent },
    { path: 'notmap', component: NotMapComponent }
];