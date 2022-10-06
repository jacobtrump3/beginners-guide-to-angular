import { Component, EventEmitter, Input, NgModule, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'two-way-data-binding-example',
    template: `
        <div>
            <h2>
                Two way data binding
            </h2>
            <sizer-component [(size)]="fontSize"></sizer-component>
            <div [style.font-size]="fontSize">Resizable Text</div>
            <input [(ngModel)]="fontSize" #ctrl="ngModel" required>
        </div>
    `
})
export class TwoWayDataBindingComponent {
    fontSize = "16px"
}

@Component({
    selector: "sizer-component",
    template: `
    <div>
        <button type="button" (click)="dec()" title="smaller">-</button>
        <button type="button" (click)="inc()" title="bigger">+</button>
        <div>FontSize: {{size}}</div>
    </div>
    `
})
export class SizerCompoent {
    // With two way data binding the size property being passed in also comes with
    // the sizeChange function to pass a value out
    @Input()
    size!: string;
    @Output()
    sizeChange = new EventEmitter<string>();
    pxToNumber(size: string): number {
        return Number(size.split('p')[0])
    }
    dec() {
        const decSize: number = this.pxToNumber(this.size) - 1
        const newSizePx = decSize + 'px';
        this.size = newSizePx;
        this.sizeChange.emit(newSizePx)
    }
    inc() {
        const incSize = this.pxToNumber(this.size) + 1
        const newSizePx = incSize + 'px';
        this.size = newSizePx;
        this.sizeChange.emit(newSizePx)
    }
}
@NgModule({
    declarations: [
        SizerCompoent,
        TwoWayDataBindingComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        TwoWayDataBindingComponent
    ]
})
export class TwoWayDataBindingModule {}