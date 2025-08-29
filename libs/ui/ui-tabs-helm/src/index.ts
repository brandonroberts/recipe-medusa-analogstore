import { NgModule } from '@angular/core';

import { HlmTabsContent } from './lib/hlm-tabs-content.directive';
import { HlmTabsListComponent } from './lib/hlm-tabs-list.component';
import { HlmTabsPaginatedListComponent } from './lib/hlm-tabs-paginated-list.component';
import { HlmTabsTrigger } from './lib/hlm-tabs-trigger.directive';
import { HlmTabsComponent } from './lib/hlm-tabs.component';

export * from './lib/hlm-tabs-content.directive';
export * from './lib/hlm-tabs-list.component';
export * from './lib/hlm-tabs-paginated-list.component';
export * from './lib/hlm-tabs-trigger.directive';
export * from './lib/hlm-tabs.component';

export const HlmTabsImports = [
	HlmTabsComponent,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
	HlmTabsContentDirective,
	HlmTabsPaginatedListComponent,
] as const;

@NgModule({
	imports: [...HlmTabsImports],
	exports: [...HlmTabsImports],
})
export class HlmTabsModule {}
