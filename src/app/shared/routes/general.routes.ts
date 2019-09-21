import { Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

export const GeneralRoutes: Routes = [
    {
        path: '',
        loadChildren: './components/components.module#ComponentsModule'
    }
]