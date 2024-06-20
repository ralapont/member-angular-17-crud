import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';
import { State } from '../../models/state.model';
import { StateService } from '../../services/state.service';

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
  states?: State[];
  message: string = '';

  constructor(private memberService: MemberService, private stateService: StateService) { }

  ngOnInit(): void {
    this.retrieveStates();
  }

  retrieveStates(): void {
    this.stateService.getAll()
      .subscribe({
        next: (data) => {
          this.states = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

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
