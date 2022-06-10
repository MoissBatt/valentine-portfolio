import { Component, OnInit } from '@angular/core';
import { MentionsModalComponent } from '../home-page-components/mentions-modal/mentions-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  modalMentionsRef: MdbModalRef<MentionsModalComponent> | null = null;

  constructor(private modalService: MdbModalService) { }

  ngOnInit(): void {
  }

  openMentionsModal() {
    this.modalMentionsRef = this.modalService.open(MentionsModalComponent, {
      modalClass: 'modal-lg'
    }
    )
    
  }
}
