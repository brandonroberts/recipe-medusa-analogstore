import { NgModule } from '@angular/core';

import { HlmCommandDialogCloseButton } from './lib/hlm-command-dialog-close-button.directive';
import { HlmCommandDialog } from './lib/hlm-command-dialog.directive';
import { HlmCommandEmpty } from './lib/hlm-command-empty.directive';
import { HlmCommandGroup } from './lib/hlm-command-group.directive';
import { HlmCommandInputWrapperComponent } from './lib/hlm-command-input-wrapper.component';
import { HlmCommandInput } from './lib/hlm-command-input.directive';
import { HlmCommandItemIcon } from './lib/hlm-command-item-icon.directive';
import { HlmCommandItem } from './lib/hlm-command-item.directive';
import { HlmCommandList } from './lib/hlm-command-list.directive';
import { HlmCommandSeparator } from './lib/hlm-command-separator.directive';
import { HlmCommandShortcutComponent } from './lib/hlm-command-shortcut.component';
import { HlmCommand } from './lib/hlm-command.directive';

export * from './lib/hlm-command-dialog-close-button.directive';
export * from './lib/hlm-command-dialog.directive';
export * from './lib/hlm-command-empty.directive';
export * from './lib/hlm-command-group.directive';
export * from './lib/hlm-command-input-wrapper.component';
export * from './lib/hlm-command-input.directive';
export * from './lib/hlm-command-item-icon.directive';
export * from './lib/hlm-command-item.directive';
export * from './lib/hlm-command-list.directive';
export * from './lib/hlm-command-loader.directive';
export * from './lib/hlm-command-separator.directive';
export * from './lib/hlm-command-shortcut.component';
export * from './lib/hlm-command.directive';

export const HlmCommandImports = [
	HlmCommandDirective,
	HlmCommandInputDirective,
	HlmCommandItemDirective,
	HlmCommandSeparatorDirective,
	HlmCommandGroupDirective,
	HlmCommandListDirective,
	HlmCommandShortcutComponent,
	HlmCommandItemIconDirective,
	HlmCommandEmptyDirective,
	HlmCommandInputWrapperComponent,
	HlmCommandDialogCloseButtonDirective,
	HlmCommandDialogDirective,
] as const;

@NgModule({
	imports: [...HlmCommandImports],
	exports: [...HlmCommandImports],
})
export class HlmCommandModule {}
