import { Component } from "@angular/core";

// Can either be created by just adding the file or by using Angular CLI with command:
// ng generate component habit-list --inlineTemplate --inlineStyle
const singleFileComponentTemplate = `
    <div>
        <h1>{{title}}</h1>
        <h2>{{message}}</h2>
    </div>
`
const singleFileComponentStyles = `
    h1 {
        color: blue
    }
`
@Component({
    selector: 'single-file-component',
    template: singleFileComponentTemplate,
    styles: [singleFileComponentStyles],
    inputs: ['message'] 
})
export class SingleFileComponent {
    message: string = '';
    title = 'single file component';
}