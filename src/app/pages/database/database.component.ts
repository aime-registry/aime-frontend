import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IKeyword, IReport} from '../../interfaces';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Component({
	templateUrl: './database.component.html',
	styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

	public keywords: IKeyword[] = [];

	public categories: { category: string; name: string }[] = [
		{category: 'Classification', name: 'Classification'},
		{category: 'Continuous estimation / Regression', name: 'Continuous estimation / Regression'},
		{category: 'Clustering', name: 'Clustering'},
		{category: 'Dimensionality reduction', name: 'Dimensionality reduction'},
		{category: 'Anomaly detection', name: 'Anomaly detection'},
		{category: 'Ranking / Recommendation', name: 'Ranking / Recommendation'},
		{category: 'Data generation', name: 'Data generation'},
		{category: 'Other', name: 'Other'},
	];

	public sections: { id: string; name: string }[] = [
		{id: 'MD', name: 'Metadata'},
		{id: 'P', name: 'Purpose'},
		{id: 'D', name: 'Data'},
		{id: 'M', name: 'Method'},
		{id: 'R', name: 'Reproducibility'},
	];

	public query = new BehaviorSubject<string>('');
	public category = '';

	public results: IReport[] = [];

	public resultsCount: number | null = null;

	public lastQuery = '';
	public lastKeyword = '';

	public keywordsExtended = false;

	public keywordsActivated: { [key: string]: boolean } = {};
	public sectionsActivated: { [key: string]: boolean } = {};

	public reportCited: IReport | null = null;

	public currentPage = 0;
	public pages: number[] = [];
	private ITEMS_PER_PAGE = 10;

	constructor(private http: HttpClient) {
		for (const s of this.sections) {
			this.sectionsActivated[s.id] = true;
		}

		this.query.pipe(
			debounceTime(300),
			distinctUntilChanged())
			.subscribe(() => {
				this.search();
			});
	}

	ngOnInit() {
		this.http.get<{ keywords: IKeyword[] }>(`${environment.api}keywords`)
			.subscribe((resp) => {
				this.keywords = resp.keywords
					.filter((k) => k.count > 0)
					.sort((a, b) => {
						if (a.keyword.toLowerCase() > b.keyword.toLowerCase()) {
							return 1;
						} else {
							return -1;
						}
					});
			});
	}

	private getFields(): string {
		const fields: string[] = [];
		for (const s of this.sections) {
			if (this.sectionsActivated[s.id]) {
				fields.push(s.id);
			}
		}
		return fields.join(',');
	}

	private getKeywords(): string {
		const keywords: string[] = [];
		for (const s of this.keywords) {
			if (this.keywordsActivated[s.keyword]) {
				keywords.push(s.keyword);
			}
		}
		return keywords.join(',');
	}

	public search(page = 0) {
		this.http.get<any>(`${environment.api}search?c=${this.category}&q=${escape(this.query.getValue())}&k=${this.getKeywords()}&f=${this.getFields()}&o=${page * this.ITEMS_PER_PAGE}&l=${this.ITEMS_PER_PAGE}`)
			.subscribe((resp) => {
				this.resultsCount = resp.count;
				this.results = resp.results as any;
				this.lastQuery = resp.query;

				this.pages = Array(Math.ceil(this.resultsCount / this.ITEMS_PER_PAGE)).fill(0).map((x, i) => i);

				this.currentPage = page;
			});
	}

	public setPage(i) {
		this.search(i);
	}

}
