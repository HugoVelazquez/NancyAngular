import { NgModule } from '@angular/core';

//Modules
import { CoreModule } from './core/core.modules';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CoreModule,
        NgbModule.forRoot()
    ],
    bootstrap: [
        AppComponent
        ]
})
export class AppModule { }
