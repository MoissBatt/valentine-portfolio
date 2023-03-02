import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../../../service/scroll-service';
import { SectionEnum } from '../../../model/section-enum';

@Component({
  selector: 'app-cosplay-sogeking',
  templateUrl: './cosplay-sogeking.component.html',
  styleUrls: ['./cosplay-sogeking.component.scss']
})
export class CosplaySogekingComponent implements OnInit {

  @ViewChild('sectionDivSogeking') private sectionDivSogeking: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();
  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.SOGEKING:
        this.scrollService.scrollToElement(this.sectionDivSogeking);
        break;
      default:
        console.log('No ' + sectionToScroll + ' to scroll in')
        break;
    }
  }

  clickOnSection(section: string) {
    timer(1).pipe(tap(x => {
      switch (section) {
        case ('RED'):
          this.scrollService.notifyScroll$(SectionEnum.RED);
          break;
        case ('AURON'):
          this.scrollService.notifyScroll$(SectionEnum.AURON);
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
