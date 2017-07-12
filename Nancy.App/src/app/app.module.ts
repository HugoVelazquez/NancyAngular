import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Modules
import { CoreModule } from './core/core.modules';
import { HomeModule } from './features/home/home.module';
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
        HomeModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(AppRoutes, { enableTracing : true })
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
