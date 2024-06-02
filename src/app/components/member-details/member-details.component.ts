import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';


@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css'
})
export class MemberDetailsComponent implements OnInit  {

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router) { }

    member: Member = {};
    memberModify: Member = {};
    readOnly: boolean = false;
    message: string = '';

      
    ngOnInit(): void {
        this.getTutorial(this.route.snapshot.params["id"]);
        console.log('Mode ==> '+this.route.snapshot.params["mode"])
        this.readOnly = (this.route.snapshot.params["mode"] == 'view')? true: false;
    }

    getTutorial(id: string): void {
      this.memberService.get(id)
        .subscribe({
          next: (data) => {
            this.member = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }

    updateMember(id: string): void {
      console.log('id ==> ' + this.member.memberId);

      this.memberService.update(this.member.memberId, this.member)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = 'The member was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }


}
