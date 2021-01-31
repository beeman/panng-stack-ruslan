import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebCoreFeatureModule } from '@panng/web/core/feature'

@NgModule({
  imports: [
    WebCoreFeatureModule,
    RouterModule.forRoot(
      [
        // App Routes
        { path: '', pathMatch: 'full', redirectTo: 'listings' },
        {
          path: 'listings',
          loadChildren: () =>
            import('@panng/web/listing/feature').then(
              (m) => m.WebListingFeatureModule,
            ),
        },
        // Auth - Login / Register
      ],
      { initialNavigation: 'enabled' },
    ),
  ],
})
export class WebShellFeatureModule {}
