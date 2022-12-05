import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    StudentComponent,
    SearchFieldComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
