import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebCoreFeatureGraphQLModule } from './web-core-feature-graphql.module'

@NgModule({
  imports: [CommonModule, WebCoreFeatureGraphQLModule],
})
export class WebCoreFeatureModule {}
