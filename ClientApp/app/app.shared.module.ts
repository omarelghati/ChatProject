import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component';
import { AuthentificationService } from './services/autentification.service';
import { UserService } from './services/user.service';
import { LogoutComponent } from './components/logout/logout.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { MychatsComponent } from './components/mychats/mychats.component';
import { FriendsComponent } from './components/friends/friends.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        MyprofileComponent,
        MychatsComponent,
        FriendsComponent,
        HomeComponent,
        LoginComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent },
            { path: 'profile', component: MyprofileComponent },
            { path: 'chats', component: MychatsComponent },
            { path: 'friends', component: FriendsComponent },

            { path: '**', redirectTo: 'login' }
        ])
    ],
    providers: [AuthentificationService,UserService]
})
export class AppModuleShared {
}
