import { MemberService } from './../member.service';
import { Member} from './../model/member.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {

  member: Member = new Member();
  submitted = false;
  sexList: Observable<any[]>;

  constructor(
    private memberService: MemberService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.sexList = this.memberService.getSexList();
  }

  newMember(): void{
    this.submitted = false;
    this.member = new Member();
  }

  save(){
    this.memberService.createMember(this.member)
      .subscribe(data => console.log(data), error => console.log(error));
    this.member = new Member();
    this.router.navigate(['member/list']);
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
