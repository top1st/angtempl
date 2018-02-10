import { Component, EventEmitter, Input, NgZone, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

import { Nav } from './nav.interface';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
    selector: 'app-shell',
    styleUrls: ['./app-shell.component.scss'],
    templateUrl: './app-shell.component.html'
})
export class AppShellComponent {

    @Input() sidenavVisible = true;
    @Input() navs: Nav[] = [];
    @Input() toolbarVisible = true;

    @Output() logout = new EventEmitter();
    @Output() viewProfile = new EventEmitter();

    @ViewChild(MatSidenav) sidenav: MatSidenav;

    compact = false;

    private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

    constructor(
        private router: Router,
        private zone: NgZone
    ) {
        this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
    }

    ngOnInit() {
        this.router.events.subscribe(() => {
            if (this.sidenav && this.isScreenSmall()) {
                this.sidenav.close();
            }
        });
    }

    isScreenSmall(): boolean {
        return true; //this.mediaMatcher.matches;
    }
    
}
