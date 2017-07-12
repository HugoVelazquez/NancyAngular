import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Modules
import { CoreModule } from './core/core.modules';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';

//Routes
import { AppRoutes } from './app.routing'


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CoreModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(AppRoutes, { useHash: false })
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
