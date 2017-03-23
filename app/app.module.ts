import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Navbar }   from './component/navbar/navbar';
import { Jumbotron }   from './component/jumbotron/jumbotron';
import { Home }   from './component/page/Home';
import { About }   from './component/page/about';
import { routing }   from './app.routing';

@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ 
    AppComponent,
    Navbar,
    Jumbotron,
    Home,
    About
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }