import { ForbiddenComponent } from './shared/component/forbidden/forbidden.component';
import { NotfoundComponent } from './shared/component/notfound/notfound.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuardService } from './core/guards/auth-guard.service';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "about",
    component: AboutComponent,
    pathMatch: 'full'
  },
  { path: '**', component: NotfoundComponent },
  { path: '403', component: ForbiddenComponent, pathMatch: 'full' },
  { path: '404', component: NotfoundComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
