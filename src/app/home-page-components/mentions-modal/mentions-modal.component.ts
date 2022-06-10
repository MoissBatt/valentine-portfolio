import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-mentions-modal',
  templateUrl: './mentions-modal.component.html',
  styleUrls: ['./mentions-modal.component.scss']
})
export class MentionsModalComponent{
  constructor(public modalRef: MdbModalRef<MentionsModalComponent>) { }

}
