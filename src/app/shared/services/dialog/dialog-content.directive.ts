import { Directive, Input, OnInit, ComponentFactoryResolver, ComponentRef, ViewContainerRef, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormComponent } from './dialog.service';

@Directive({
    selector: '[dialogContent]',
    exportAs: 'dialogContent'
})
export class DialogContentDirective implements OnInit {
    
    @Input() content: Type<FormComponent>;

    get form(): FormGroup {
        return this.componentRef.instance.form;
    }

    private componentRef: ComponentRef<FormComponent>

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) {}

    ngOnInit(): void {
        const cf = this.resolver.resolveComponentFactory<FormComponent>(this.content);
        this.componentRef = this.container.createComponent(cf);
    }
}
