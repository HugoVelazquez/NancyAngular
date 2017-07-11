import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Core Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule
    ],
    declarations: [
        SidebarComponent,
        HeaderComponent
    ],
    exports: [
        SidebarComponent,
        HeaderComponent
    ]
})

export class CoreModule {
    
}
