import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";
import {ChangeLanguageComponent} from './components/atoms/change-language/change-language.component';

import translationsDE from '../assets/translations/de.json';
import translationsEN from '../assets/translations/en.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChangeLanguageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        this.translate.addLangs(['de', 'en']);
        this.translate.setTranslation('de', translationsDE);
        this.translate.setTranslation('en', translationsEN);
        this.translate.setDefaultLang('de');
        this.translate.use('de');
    }
}
