import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QuestionnaireComponent} from './pages/questionnaire/questionnaire.component';
import {IndexComponent} from './pages/index/index.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EnvPipe} from './pipes/env.pipe';
import {DatabaseComponent} from './pages/database/database.component';
import {AboutComponent} from './pages/about/about.component';
import {QuFieldComponent} from './components/qu-field/qu-field.component';
import {CiteReportComponent} from './components/cite-report/cite-report.component';
import {MonacoEditorModule, NgxMonacoEditorConfig} from 'ngx-monaco-editor';
import {QuTreeComponent} from './components/qu-tree/qu-tree.component';
import {SpecificationComponent} from './pages/specification/specification.component';
import {ContributeComponent} from './pages/contribute/contribute.component';
import {ReportComponent} from './components/report/report.component';
import {ReportComponent as ReportComponentPage} from './pages/report/report.component';
import {IssueComponent} from './components/issue/issue.component';
import {IssueComponent as IssueComponentPage} from './pages/issue/issue.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';

const monacoConfig: NgxMonacoEditorConfig = {
	baseUrl: 'assets',
	defaultOptions: {scrollBeyondLastLine: false}
};

@NgModule({
	declarations: [
		AppComponent,
		QuestionnaireComponent,
		IndexComponent,
		EnvPipe,
		DatabaseComponent,
		AboutComponent,
		QuFieldComponent,
		CiteReportComponent,
		QuTreeComponent,
		SpecificationComponent,
		ReportComponent,
		ReportComponentPage,
		IssueComponentPage,
		ContributeComponent,
		IssueComponent,
		IssueComponent,
		LegalNoticeComponent,
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		MonacoEditorModule.forRoot(monacoConfig),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
