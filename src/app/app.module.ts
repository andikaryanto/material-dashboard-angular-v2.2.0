import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TableListComponent } from './pages/table-list/table-list.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

//services
import { MGroupusersService } from './services/m-groupusers.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [MGroupusersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
