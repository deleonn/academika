import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { SubjectListService } from './subject-list.service'

import { Subject } from './subject';

@Component({
  selector: 'subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
  providers: [SubjectListService]
})
export class SubjectListComponent implements OnInit {
  errorMessage: string;
  subjects: Subject[];

  constructor(private router: Router, private subjectListService: SubjectListService) {}

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(){
    this.subjectListService.getSubjects()
      .subscribe(
        subjects => this.subjects = subjects,
        error =>  this.errorMessage = <any>error
      );
  }

  onSelect(subject: Subject) {
    this.router.navigate(['/materia', subject.id]);
  }

}
