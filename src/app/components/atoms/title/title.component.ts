import {Component, input} from '@angular/core';
import {EMPTY_STRING} from '../../../consts/string.const';
import { BASE_FONT_SIZE } from '../../../consts/size.const';

@Component({
    selector: 'atom-title',
    imports: [],
    templateUrl: './title.component.html',
    styleUrl: './title.component.scss'
})
export class TitleComponent {

    title = input.required<string>();
    baseFontSizeMultiplier = input<number>(1);
    colorClass = input<string>('red');
    isTag = input<boolean>(false);
    tagColorClass = input<string>(EMPTY_STRING)
    hasWavyUnderline = input<boolean>(false);

    readonly BASE_FONT_SIZE = BASE_FONT_SIZE;

}
