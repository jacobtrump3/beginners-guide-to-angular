import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentCodeViewer } from './components/componentCodeViewer/component-code-viewer';
import { ContentChildExampleModule } from './components/contentChildExample/content-child-example';
import { ContentChildrenExampleModule } from './components/contentChildrenExample/content-children-example';
import { FromExampleModule } from './components/formExample/form-example';
import { SingleFileComponent } from './components/singleFile/single-file.component';
import { TwoWayDataBindingModule } from './components/twoWayDataBindingExample/two-way-data-binding-example';
import { AppRoutingModule } from './router.module';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    SingleFileComponent,
    ComponentCodeViewer,
  ],
  imports: [
    BrowserModule,
    ContentChildExampleModule,
    ContentChildrenExampleModule,
    TwoWayDataBindingModule,
    FromExampleModule,
    AppRoutingModule
  ],
  // entryComponents: [AppComponent]
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
    const webComponent = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('angular-examples', webComponent)
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    
  }
}


