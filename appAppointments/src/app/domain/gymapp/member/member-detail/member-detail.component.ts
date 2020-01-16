import { MemberListComponent } from './../member-list/member-list.component';
import { MemberService } from './../member.service';
import { Member } from './../model/member.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  memberData: any = {};

  constructor(
    private memberService: MemberService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.memberService.getMember(this.id)
      .subscribe((data: {}) => {
        this.memberData = data;
      });
  }

  detailsMember() {
    this.router.navigate(['member/list']);
  }


}
