import { MemberService } from './../member.service';
import { Member } from './../model/member.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  memberData: any = {};

  constructor(
    public memberService: MemberService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.memberService.getMember(this.id)
      .subscribe((data: {}) => {
        this.memberData = data;
      });
  }

  MemberEditComponent() {
    if (window.confirm('Ar you sure, you want to update an Member')) {
      this.memberService.updateMember(this.id, this.memberData).subscribe(data => {
        this.router.navigate(['member/list']);
      });
    }
  }

}