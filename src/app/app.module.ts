import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material Components

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './pages/main/main.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { PanelComponent } from './shared/components/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
