import {Component, Input, OnInit} from '@angular/core';
import {IIssue} from '../../interfaces';

@Component({
	selector: 'app-issue',
	templateUrl: './issue.component.html',
	styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

	@Input()
	public issue?: IIssue;

	constructor() {
	}

	ngOnInit(): void {
	}

}
