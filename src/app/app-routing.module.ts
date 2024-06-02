import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddMemberComponent } from './components/add-member/add-member.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberListComponent } from './components/member-list/member-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full'},
  { path: 'members', component: MemberListComponent },
  { path: 'members/:id/:mode', component: MemberDetailsComponent},
  { path: 'add', component: AddMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
