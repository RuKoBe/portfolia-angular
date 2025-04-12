import { Component, computed, inject, signal } from '@angular/core';
import { ApplicationLanguage } from './enums/application-language.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'atom-change-language',
  imports: [],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss'
})
export class ChangeLanguageComponent {

    currentLanguage = signal<ApplicationLanguage>(ApplicationLanguage.DE);

    isEnglishSelected = computed(() => this.currentLanguage() === ApplicationLanguage.EN);

    isGermanSelected = computed(() => this.currentLanguage() === ApplicationLanguage.DE);

    private translateService: TranslateService = inject(TranslateService);

    changeLanguage(language: ApplicationLanguage): void {
      this.currentLanguage.set(language);
      this.translateService.use(language);
    }

    protected readonly APPLICATION_LANGUAGE = ApplicationLanguage;

}
