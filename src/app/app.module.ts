import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberListComponent } from './components/member-list/member-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    MemberDetailsComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
