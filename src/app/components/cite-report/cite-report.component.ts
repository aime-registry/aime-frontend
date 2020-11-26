import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
	selector: 'app-cite-report',
	templateUrl: './cite-report.component.html',
	styleUrls: ['./cite-report.component.scss']
})
export class CiteReportComponent implements OnInit {

	@Input() idI: string;

	@Input() set id(id: string) {
		this.idI = id;

		this.http.get<any>(`${environment.api}report/${id}`).subscribe((data) => {
			this.title = data.answers.MD['1'];
			this.authors = data.answers.MD['6'].map((contact) => contact['1'] as string);
		});
	}

	public title: string = '';
	public authors: string[] = [];

	constructor(private http: HttpClient) {
	}

	ngOnInit() {
	}

}
