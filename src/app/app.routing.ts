import { Routes, RouterModule } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { MainPageComponent } from './main-page/main-page.component';


const appRoutes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'second', component: SecondPageComponent}
];

export const AppRouting = RouterModule.forRoot(appRoutes);
