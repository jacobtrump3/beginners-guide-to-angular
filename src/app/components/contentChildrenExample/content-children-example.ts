import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ContentChildren, Directive, ElementRef, Input, NgModule, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Directive({ selector: 'pane' })
export class Pane {
    @Input() id!: string;
}

@Component({
    selector: 'tab',
    template: `
    <div class="top-level">Top level panes: {{serializedPanes}}</div>
    <div class="nested">Arbitrary nested panes: {{serializedNestedPanes}}</div>
    <div class="nested">Test elements: {{serializedTestElements}}</div>

  `
})
export class Tab {
    @ContentChildren(Pane) topLevelPanes!: QueryList<Pane>;
    @ContentChildren(Pane, { descendants: true }) arbitraryNestedPanes!: QueryList<Pane>;
    @ContentChildren('test', { descendants: true }) testElements!: QueryList<ElementRef>;

    get serializedPanes(): string {
        return this.topLevelPanes ? this.topLevelPanes.map(p => p.id).join(', ') : '';
    }
    get serializedNestedPanes(): string {
        return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
    }
    get serializedTestElements(): string {
        return this.testElements ? this.testElements.map(t => t.nativeElement.getAttribute("id")).join(', ') : '';
    }
}

@Component({
    selector: 'content-childen-example',
    template: `
    <h2>Content and View children Example</h2>
    <h4>ViewChild and ViewChildren Ex:</h4>
    <div #testChild id="testChild">Test Child 0!</div>
    <div #testChild id="testChild1">Test Child 1!</div>
    <div #testChild id="testChild2">Test Child 2!</div>
    <div #testChild id="testChild3">Test Child 3!</div>
    <h4>ContentChild and ContentChildren Ex:</h4>
    <tab>
        <div #test id="test1"></div>
        <div #test id="test2"></div>
        <div #test id="test3"></div>
        <pane id="1"></pane>
        <pane id="2"></pane>
        <pane id="3" *ngIf="shouldShow">
            <tab>
                <pane id="3_1"></pane>
                <pane id="3_2"></pane>
            </tab>
        </pane>
    </tab>

    <button (click)="show()">Show 3</button>
  `,
})
export class ContentChildrenComp {
    shouldShow = false;
    @ViewChild('testChild') testChild!: ElementRef
    @ViewChildren('testChild') testChildren!: ElementRef[]

    show() {
        this.testChild.nativeElement.style.color = this.shouldShow ? 'blue' : 'red'
        this.testChildren.forEach(child => {
            child.nativeElement.style.backgroundColor = this.shouldShow ? "green" : "purple"
        })

        this.shouldShow = !this.shouldShow;
    }
}


@NgModule({
    declarations: [
        Tab,
        ContentChildrenComp,
        Pane
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ContentChildrenComp,
    ]
})
export class ContentChildrenExampleModule { }