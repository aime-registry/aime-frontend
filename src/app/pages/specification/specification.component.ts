import {Component, OnInit} from '@angular/core';
import {IQuestion, parseQuestions} from '../../interfaces';
import {HttpClient} from '@angular/common/http';
import YAML from 'yaml';

@Component({
	templateUrl: './specification.component.html',
	styleUrls: ['./specification.component.scss']
})
export class SpecificationComponent implements OnInit {

	public yamlSpec = '';
	public questions: IQuestion = {type: 'complex', children: []};

	public showTree = true;
	public showSpec = true;

	constructor(private http: HttpClient) {
		this.http.get('assets/questionnaire.yaml', {
			responseType: 'text',
		}).subscribe(data => {
			this.yamlSpec = data;
			const jsonSpec = YAML.parse(this.yamlSpec, {});
			this.questions = parseQuestions(jsonSpec);
		});
	}

	ngOnInit(): void {
	}

}
