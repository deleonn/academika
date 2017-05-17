import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { SubjectDetailService } from './subject-detail.service'

import { Subject } from './subject';

@Component({
  selector: 'subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css'],
  providers: [SubjectDetailService]
})
export class SubjectDetailComponent implements OnInit {
  subjectID: number;
  subject: Subject[];

  constructor(private route: ActivatedRoute, private router: Router, private subjectDetailService: SubjectDetailService) { }

  ngOnInit() {
    this.getSubject();
  }

  getSubject() {
    this.subjectID = +this.route.snapshot.params['id'];
    this.subjectDetailService.getSubject(this.subjectID)
      .subscribe(
        subject => this.subject = subject,
      );
  }

}
