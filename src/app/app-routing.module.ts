import {NgModule} from '@angular/core';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ServerComponent} from './servers/server/server.component';
import {RouterModule, Routes} from '@angular/router';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {UserComponent} from './users/user/user.component';
import {AuthGuard} from './auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})

export class AppRoutingModule {

}
