import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzDropDownModule,
    NzButtonModule,
    NzDatePickerModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
