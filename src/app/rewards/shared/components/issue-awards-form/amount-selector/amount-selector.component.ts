import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'amount-selector',
    templateUrl: './amount-selector.component.html'
})
export class AmountSelectorComponent {

    amounts = [10, 15, 20, 25, 30, 35, 40, 45, 50];

    @Input() parent: FormGroup;

    get required(): boolean {
        return this.parent.get('amount').hasError('required');
    }

}
