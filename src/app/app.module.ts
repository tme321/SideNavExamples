import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { LayoutComponent } from './layout/layout.component';
import { MapComponent } from './map/map.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { NotMapComponent } from './not-map/not-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ListViewComponent,
    DetailViewComponent,
    LayoutComponent,
    MapComponent,
    NotMapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
