import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  members?: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.retrieveMembers();
  }

  retrieveMembers(): void {
    this.memberService.getAll()
      .subscribe({
        next: (data) => {
          this.members = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  removeMember(id: any): void {
    this.memberService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
    }
  
}
