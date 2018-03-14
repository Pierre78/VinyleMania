import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { PleasureComponent } from './pleasure/pleasure.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SongComponent } from './pleasure/song/song.component';
import { ArtistComponent } from './pleasure/artist/artist.component';
import { CategoryComponent } from './pleasure/category/category.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes =[
  {
    path: 'nouveautés', component: NewsComponent
  },
  {
    path: 'plaisir', component: PleasureComponent
  },
  {
    path: 'morceaux', component: SongComponent
  },
  {
    path:'artiste', component: ArtistComponent
  },
  {
    path: 'genre', component: CategoryComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'inscription', component: SignInComponent
  },
  {
    path: 'connexion', component: SignUpComponent
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    PleasureComponent,
    UserComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    SongComponent,
    ArtistComponent,
    CategoryComponent,
    

  ],
  imports: [
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({

      

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
