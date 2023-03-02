import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../../../service/scroll-service';
import { SectionEnum } from '../../../model/section-enum';

@Component({
  selector: 'app-cosplay-auron',
  templateUrl: './cosplay-auron.component.html',
  styleUrls: ['./cosplay-auron.component.scss']
})
export class CosplayAuronComponent implements OnInit {

  @ViewChild('sectionDivAuron') private sectionDivAuron: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();
  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.AURON:
        this.scrollService.scrollToElement(this.sectionDivAuron);
        break;
      default:
        console.log('No ' + sectionToScroll + ' to scroll in')
        break;
    }
  }

  clickOnSection(section: string) {
    timer(1).pipe(tap(x => {
      switch (section) {
        case ('TARECGOSA'):
          this.scrollService.notifyScroll$(SectionEnum.TARECGOSA);
          break;
        case ('SOGEKING'):
          this.scrollService.notifyScroll$(SectionEnum.SOGEKING);
          break;
        case ('PROJETS'):
          this.scrollService.notifyScroll$(SectionEnum.PROJETS);
          break;
        default:
          console.log('No section: ' + section);
          break;
      }
    })).subscribe();
  }

}
