import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const AppRoutes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];