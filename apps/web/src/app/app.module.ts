import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { WebShellFeatureModule } from '@panng/web/shell/feature'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, WebShellFeatureModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
