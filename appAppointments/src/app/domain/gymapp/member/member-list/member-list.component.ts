import { MemberService } from './../member.service';
import { Observable } from 'rxjs';
import { Member } from './../model/member.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  member: Observable<Member[]>;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.member = this.memberService.getMemberList();
  }

  deleteMember(id: number) {
    if (window.confirm('Ar you sure, you want to delete an Member')) {
      this.memberService.deleteMember(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  }

  detailsMember(id: number) {
    this.memberService.getMember(id);

  }

}
