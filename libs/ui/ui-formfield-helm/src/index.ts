import { NgModule } from '@angular/core';
import { HlmError } from './lib/hlm-error.directive';
import { HlmFormFieldComponent } from './lib/hlm-form-field.component';
import { HlmHint } from './lib/hlm-hint.directive';

export * from './lib/hlm-error.directive';
export * from './lib/hlm-form-field.component';
export * from './lib/hlm-hint.directive';

@NgModule({
	imports: [HlmFormFieldComponent, HlmErrorDirective, HlmHint],
	exports: [HlmFormFieldComponent, HlmErrorDirective, HlmHint],
})
export class HlmFormFieldModule {}
