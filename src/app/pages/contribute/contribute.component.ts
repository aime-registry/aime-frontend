import {Component, EventEmitter, NgZone, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {createDefaults, getter, IQuestion, validateRec} from '../../interfaces';

declare var grecaptcha;

@Component({
	templateUrl: './contribute.component.html',
	styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {

	public message = '';
	public messageType: 'error' | 'success' = 'success';

	public validationErrors = [];

	public validationTrigger = new EventEmitter<void>();

	public questions: IQuestion = {
		type: 'complex',
		children: [
			{
				id: 'Q',
				type: 'complex',
				title: 'Question',
				children: [
					{
						id: '1',
						type: 'text',
						optional: true,
						title: 'Suggested question',
						question: 'What is the question you want to suggest?',
					},
					{
						id: '2',
						type: 'text',
						title: 'Suggested question',
						question: 'Why do you think this question is important?',
						condition: (val) => val[1]?.length > 0,
					},
				],
			},
			{
				id: 'F',
				type: 'complex',
				title: 'Feedback',
				children: [
					{
						id: '1',
						type: 'text',
						optional: true,
						title: 'General feedback',
						question: 'Do you have general feedback or suggestions for AIMe?',
					},
				],
			},
			{
				id: 'C',
				type: 'complex',
				title: 'Contact',
				children: [
					{
						id: '1',
						type: 'string',
						title: 'Name',
						question: 'Please fill in your name.'
					},
					{
						id: '2',
						type: 'string',
						title: 'Email address',
						question: 'Please fill in a valid email address.'
					},
					{
						id: '3',
						type: 'text',
						title: 'Affiliation',
						question: 'Please fill in your affiliation.'
					},
					{
						id: '4',
						type: 'boolean',
						title: 'I want to become part of the AIMe steering committee',
						question: 'Decide if you want to become part of the AIMe steering committee.'
					}
				]
			}
		]
	};

	public answers: any = {};

	public captchaLoaded = false;

	public getter = (id: string) => {
		return getter(this.questions, this.answers, id.split('.'));
	};

	constructor(private http: HttpClient, private zone: NgZone) {
	}

	ngOnInit() {
		this.message = '';
		this.loadRecaptcha();
		this.answers = createDefaults(this.questions);
	}

	public async submitSurvey() {
		this.validationTrigger.next();
		this.validationErrors = validateRec('', this.questions, this.answers, (id: string) => {
			return getter(this.questions, this.answers, id.split('.'));
		});

		if (this.validationErrors.length > 0) {
			return;
		}

		this.http.post(`${environment.api}contribute`, {
			reToken: grecaptcha.getResponse(),
			answers: this.answers,
		})
			.subscribe((e: HttpErrorResponse) => {
				this.message = 'Thank you! We have received your contribution.';
				this.messageType = 'success';
				this.answers = createDefaults(this.questions);
			}, (e) => {
				this.message = e.error;
				this.messageType = 'error';
			});
	}

	public loadRecaptcha() {
		(window as any).onloadCallback = () => {
			grecaptcha.render('g-recaptcha', {
				sitekey: '6LeEEvoUAAAAAE6Z2TvqeVFnNTiqnC2_bPOikyP3',
			});
			this.zone.run(() => {
				this.captchaLoaded = true;
			});
		};

		const body = document.body as HTMLDivElement;
		const script = document.createElement('script');
		script.innerHTML = '';
		script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
		script.async = true;
		script.defer = true;
		body.appendChild(script);
	}

}
