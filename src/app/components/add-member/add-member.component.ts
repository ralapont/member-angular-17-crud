import { Component } from '@angular/core';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css'
})
export class AddMemberComponent {
  member: Member = {
    lastName: '',
    firstName: '',
    suffix: '',
    expiration: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    interests: ''
  }
  message: string = '';

  constructor(private memberService: MemberService) { }

  saveTutorial(): void {

    this.memberService.create(this.member)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'The member ha sido creado exitosamente!';
        },
        error: (e) => console.error(e)
      });
  }

}
