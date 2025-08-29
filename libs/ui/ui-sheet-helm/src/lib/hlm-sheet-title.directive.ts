import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { BrnSheetDescription } from '@spartan-ng/brain/sheet';
import type { ClassValue } from 'clsx';

@Directive({
	selector: '[hlmSheetTitle]',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
	hostDirectives: [BrnSheetDescription],
})
export class HlmSheetTitleDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() => hlm('text-lg font-semibold', this.userClass()));
}
