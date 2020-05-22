import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { PostGeneratorComponent } from './post-generator/post-generator.component';

const routes: Routes = [
  { path: '', component: HeroComponent, pathMatch: 'full' },
  { path: 'post/:id/:handle', component: PostGeneratorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PostGeneratorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
