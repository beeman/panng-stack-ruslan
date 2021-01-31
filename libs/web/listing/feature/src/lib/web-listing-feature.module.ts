import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebListingFeatureComponent } from './web-listing-feature.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [WebListingFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WebListingFeatureComponent },
    ]),
  ],
})
export class WebListingFeatureModule {}
