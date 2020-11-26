import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IQuestion} from '../../interfaces';

@Component({
	selector: 'app-qu-tree',
	templateUrl: './qu-tree.component.html',
	styleUrls: ['./qu-tree.component.scss']
})
export class QuTreeComponent implements OnInit {

	@Input() id: string[];
	@Input() question: IQuestion;
	@Input() hideNode = false;

	public fullId = '';

	constructor() {
	}

	ngOnInit(): void {
		this.fullId = this.id.join('.');
	}

	public appendId(id: string): string[] {
		const myId = Array.from(this.id);
		myId.push(id);
		return myId;
	}

}
