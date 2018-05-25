import { NgModule } from '@angular/core';
import { NavbarexternallinksComponent } from './navbarexternallinks/navbarexternallinks';
import { EducationComponent } from './education/education';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [
		NavbarexternallinksComponent,
    EducationComponent],
	imports: [IonicModule.forRoot(ComponentsModule),],
	exports: [NavbarexternallinksComponent,
    EducationComponent]
})
export class ComponentsModule {}
