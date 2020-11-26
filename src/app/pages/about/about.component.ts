import {Component, OnInit} from '@angular/core';

type aimeVersion = '2021.0';

@Component({
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	public members: {firstName: string; lastName: string; sortName?: string; institution: string, country: string; version: aimeVersion}[] = [
		{firstName: 'David B.', lastName: 'Blumenthal', institution: 'Technical University of Munich', country: 'Germany', version: '2021.0'},
		{firstName: 'Julian', lastName: 'Matschinske', institution: 'Technical University of Munich', country: 'Germany', version: '2021.0'},
		{firstName: 'Jan', lastName: 'Baumbach', institution: 'Technical University of Munich; University of Southern Denmark', country: 'Germany; Denmark', version: '2021.0'},
		{firstName: 'Nina', lastName: 'Wenke', institution: 'Technical University of Munich', country: 'Germany', version: '2021.0'},
		{firstName: 'Olga', lastName: 'Lazareva', institution: 'Technical University of Munich', country: 'Germany', version: '2021.0'},
		{firstName: 'Olga', lastName: 'Zolotareva', institution: 'Technical University of Munich', country: 'Germany', version: '2021.0'},
		{firstName: 'Zakaria', lastName: 'Louadi', institution: 'Technical University of Munich', country: 'Germany', version: '2021.0'},
		{firstName: 'Nicolas', lastName: 'Alcaraz', institution: 'University of Copenhagen', country: 'Denmark', version: '2021.0'},
		{firstName: 'Arriel', lastName: 'Benis', institution: 'Holon Institute of Technology', country: 'Israel', version: '2021.0'},
		{firstName: 'Martin', lastName: 'Golebiewski', institution: 'HITS gGmbH', country: 'Germany', version: '2021.0'},
		{firstName: 'Dominik G.', lastName: 'Grimm', institution: 'Technical University of Munich; Weihenstephan-Triesdorf University of Applied Sciences', country: 'Germany', version: '2021.0'},
		{firstName: 'Lukas', lastName: 'Heumos', institution: 'University of Tübingen', country: 'Germany', version: '2021.0'},
		{firstName: 'Tim', lastName: 'Kacprowski', institution: 'Technical University of Braunschweig', country: 'Germany', version: '2021.0'},
		{firstName: 'Josch', lastName: 'Pauling', institution: 'Technical University of Munich', country: 'Germany', version: '2021.0'},
		{firstName: 'Markus', lastName: 'List', institution: 'Technical University of Munich', country: 'Germany', version: '2021.0'},
		{firstName: 'Nico', lastName: 'Pfeifer', institution: 'University of Tübingen', country: 'Germany', version: '2021.0'},
		{firstName: 'Richard', lastName: 'Röttger', institution: 'University of Southern Denmark', country: 'Denmark', version: '2021.0'},
		{firstName: 'Veit', lastName: 'Schwämmle', institution: 'University of Southern Denmark', country: 'Denmark', version: '2021.0'},
		{firstName: 'Gregor', lastName: 'Sturm', institution: 'Medical University of Innsbruck', country: 'Germany', version: '2021.0'},
		{firstName: 'Alberto', lastName: 'Traverso', institution: 'MAASTRO Clinic; Maastricht University', country: 'Netherlands', version: '2021.0'},
		{firstName: 'Kristel', lastName: 'Van Steen', sortName: 'Steen', institution: 'University of Liège', country: 'Belgium', version: '2021.0'},
		{firstName: 'Martiela', lastName: 'Vaz de Freitas', institution: 'Hospital de Clínicas de Porto Alegre; Federal University of Rio Grande do Sul', country: 'Brazil', version: '2021.0'},
		{firstName: 'Silva Gerda', lastName: 'Cristal Villalba', institution: 'Hospital de Clínicas de Porto Alegre; Federal University of Rio Grande do Sul', country: 'Brazil', version: '2021.0'},
		{firstName: 'Leonard', lastName: 'Wee', institution: 'MAASTRO Clinic; Maastricht University', country: 'Netherlands', version: '2021.0'},
		{firstName: 'Massimiliano', lastName: 'Zanin', institution: 'Instituto de Física Interdisciplinar y Sistemas Complejos IFISC', country: 'Spain', version: '2021.0'},
	];

	constructor() {
		this.members = this.members.sort((a, b) => {
			const aName = a.sortName ?? a.lastName;
			const bName = b.sortName ?? b.lastName;
			if (aName > bName) {
				return 1;
			}
			if (aName < bName) {
				return -1;
			}
			return 0;
		});
	}

	ngOnInit() {
	}

}
