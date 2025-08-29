import { ChangeDetectionStrategy, Component, ViewEncapsulation, forwardRef } from '@angular/core';
import { BrnDialog } from '@spartan-ng/brain/dialog';
import { BrnSheet, BrnSheetOverlay } from '@spartan-ng/brain/sheet';
import { HlmSheetOverlayDirective } from './hlm-sheet-overlay.directive';

@Component({
	selector: 'hlm-sheet',
	standalone: true,
	imports: [BrnSheetOverlay, HlmSheetOverlayDirective],
	providers: [
		{
			provide: BrnDialog,
			useExisting: forwardRef(() => BrnSheet),
		},
		{
			provide: BrnSheet,
			useExisting: forwardRef(() => HlmSheetComponent),
		},
	],
	template: `
		<brn-sheet-overlay hlm />
		<ng-content />
	`,
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	exportAs: 'hlmSheet',
})
export class HlmSheetComponent extends BrnSheet {
	constructor() {
		super();
		// this.closeDelay = 100;
	}
}
