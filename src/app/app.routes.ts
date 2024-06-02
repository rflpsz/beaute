import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BridesComponent } from './pages/brides/brides.component';
import { DebutantesComponent } from './pages/debutantes/debutantes.component';
import { EventsComponent } from './pages/events/events.component';
import { DailyComponent } from './pages/daily/daily.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: AboutComponent },
    { path: 'noivas', component: BridesComponent },
    { path: 'debutantes', component: DebutantesComponent },
    { path: 'eventos-especiais', component: EventsComponent },
    { path: 'dia-a-dia', component: DailyComponent },
    { path: 'contato', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
