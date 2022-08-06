import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from './shared/footer/footer.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ItemComponent } from './components/item/item.component';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NgModule } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { SliderComponent } from './components/slider/slider.component';
import { TabViewModule } from 'primeng/tabview';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    MovieComponent,
    VideoEmbedComponent,
    GenresComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    CarouselModule,
    ImageModule,
    PaginatorModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
