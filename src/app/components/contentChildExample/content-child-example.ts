import { CommonModule } from '@angular/common';
import {Component, ContentChild, Directive, Input, NgModule} from '@angular/core';

@Directive({selector: 'pane'})
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'tab',
  template: `
    <div>pane: {{pane.id}}</div>
  `
})
export class Tab {
  @ContentChild(Pane) pane!: Pane;
}

@Component({
  selector: 'content-child-example',
  template: `
    <h2> Content child Example</h2>
    <tab>
      <pane id="1" *ngIf="shouldShow"></pane>
      <pane id="2" *ngIf="!shouldShow"></pane>
    </tab>
    <button (click)="toggle()">Toggle</button>
  `,
})
export class ContentChildComp {
  shouldShow = true;

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}

@NgModule ({
    declarations: [
        Tab,
        ContentChildComp,
        Pane
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ContentChildComp,
    ]
})
export class ContentChildExampleModule {}