import { Component, NgModule } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

const formDifferenceTable = `
<table>
    <thead>
        <tr>
        <th align="left"></th>
        <th align="left">Reactive</th>
        <th align="left">Template-driven</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><a href="guide/forms-overview#setup">Setup of form model</a></td>
            <td align="left">Explicit, created in component class</td>
            <td align="left">Implicit, created by directives</td>
        </tr>
        <tr>
            <td align="left"><a href="guide/forms-overview#mutability-of-the-data-model">Data model</a></td>
            <td align="left">Structured and immutable</td>
            <td align="left">Unstructured and mutable</td>
        </tr>
        <tr>
            <td align="left"><a href="guide/forms-overview#data-flow-in-forms">Data flow</a></td>
            <td align="left">Synchronous</td>
            <td align="left">Asynchronous</td>
        </tr>
        <tr>
            <td align="left"><a href="guide/forms-overview#validation">Form validation</a></td>
            <td align="left">Functions</td>
            <td align="left">Directives</td>
        </tr>
    </tbody>
</table>
`
function mustBeJakeValidator() {
    return (control: AbstractControl ) => { 
        return control.value !== "Jake" ? {notJake: {value: control.value}} : null
    }
}
@Component({
    selector: 'form-example',
    template: `
        <h2>Froms Example</h2>
        <h3>Template-driven Forms</h3>
        <h4>Setup</h4>
        <p>
            Form model is implicit rather than explicit. The 
            directive <strong>NgModel</strong><br> creates and
            manages a FormControl instance FromControl instance <br>
            for a given form element
        </p>
        <img [style]="{width: '400px'}" src="https://angular.io/generated/images/guide/forms-overview/key-diff-td-forms.png">
        <h4>Data Flow</h4>
        <h4>Example form</h4>
        <div>
            <span> Name: {{templateName}}</span>
        </div>
        <form (ngSubmit)="onSubmitTemplate()">
          <label for="first-name">First Name: </label>
          <input id="first-name" type="text" [(ngModel)]="templateFirstName" name="templateFirstName">
          <label for="last-name">Last Name: </label>
          <input id="last-name" type="text" [(ngModel)]="templateLastName" name="templateLastName">
          <button type="submit">Submit</button>
        </form>
        <h3>Reactive Forms</h3>
        <h4>Setup</h4>
        <p>
            Form model defined directly in the component 
            class, the <br><strong>[formControl]</strong>
            directive links the explicitly created <br>
            <strong>FormControl</strong>instance to a 
            specific form element in the view
        </p>
        <img [style]="{width: '400px'}" src="https://angular.io/generated/images/guide/forms-overview/key-diff-reactive-forms.png">
        <h4>Data Flow</h4>
        <h4>Example form</h4>
        <div>
            <span> Name: {{reactiveFirstName}} {{reactiveLastName}}</span>
        </div>
        <form [formGroup]="reactiveProfileForm" (ngSubmit)="onSubmitReactive()">
          <label for="first-name">First Name: </label>
          <input id="first-name" type="text" formControlName="firstName">
          <label for="last-name">Last Name: </label>
          <input id="last-name" type="text" formControlName="lastName">
          <button type="submit">Submit</button>
        </form>
        <h3>Key Differences</h3>
        ${formDifferenceTable}

    `
})
export class FormExampleComponent {
    reactiveProfileForm = new FormGroup({
        firstName: new FormControl('',
            [
                mustBeJakeValidator()
            ]
        ),
        lastName: new FormControl(''),
    });
    reactiveFirstName: string | null = '';
    reactiveLastName: string | null = '';
    templateFirstName: string | null = '';
    templateLastName: string | null = '';
    templateName: string = ''
    onSubmitReactive() {
        this.reactiveFirstName = this.reactiveProfileForm.controls.firstName.value
        this.reactiveLastName = this.reactiveProfileForm.controls.lastName.value
    }
    onSubmitTemplate() {
        this.templateName = `${this.templateFirstName} ${this.templateLastName}`
    }
}

@NgModule({
    declarations: [
        FormExampleComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormExampleComponent
    ]
})
export class FromExampleModule {}