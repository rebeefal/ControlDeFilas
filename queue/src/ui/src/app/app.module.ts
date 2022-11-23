import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintenanceComponent } from './views/maintenance/maintenance.component';
import { MaintenanceModule } from './views/maintenance/maintenance.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { KioskComponent } from './views/kiosk/kiosk.component';
import { KioskModule } from './views/kiosk/kiosk.module';
import { QueueComponent } from './views/queue/queue.component';
import { QueueModule } from './views/queue/queue.module';
import { TicketComponent } from './views/ticket/ticket.component';
import {TicketModule} from "./views/ticket/ticket.module";
import { NavbarComponent } from './views/maintenance/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import {HomeModule} from "./views/home/home.module";


@NgModule({
  declarations: [
    AppComponent,
    MaintenanceComponent,
    KioskComponent,
    QueueComponent,
    TicketComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaintenanceModule,
    NgbModule,
    HttpClientModule,
    KioskModule,
    QueueModule,
    TicketModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



