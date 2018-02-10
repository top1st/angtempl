import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'news-feed',
    template: `
    <mat-toolbar>Recently Recognized</mat-toolbar>
    <mat-list>
        <mat-list-item *ngFor="let message of news" style="cursor: pointer;" (click)="selected.emit(message)">
            <img matListAvatar [src]="message.avatar">
            <h3 matLine> {{message.title}} </h3>
            <p matLine>
                <span>{{message.content}}</span>
            </p>
        </mat-list-item>
    </mat-list>
    `
})
export class NewsFeedComponent {

    @Output() selected = new EventEmitter<any>();

    news: { id: string, avatar: string, title: string, content: string }[] = [
        {
            id: '1',
            avatar: '/assets/img/background/avatar.png',
            title: 'Congratulations Jordan Jones, Plant 1 Supply Chain Admin on receiving the Peer to Peer Recognition Award.',
            content: 'Thanks for all the hard work and the late nights moving the ball forward on this SAP implementation.'
        },
        {
            id: '2',
            avatar: '/assets/img/background/avatar.png',
            title: 'Congratulations Ann Nguyen, Head Office HR Admin on receiving the Customer First Award.',
            content: 'asdfgh'
        },
        {
            id: '3',
            avatar: '/assets/img/background/avatar.png',
            title: 'Congratulations Alan Barker, Plant 1 Fleet on receiving the Customer First Award',
            content: 'Dean, thank you for your time and dedication to get us through the inventory count for our year end and our conversion to Siteline. The hours put in and working to meet deadlines was challenging and you did it all with a smile. thank you so much!'
        }
    ];

}
