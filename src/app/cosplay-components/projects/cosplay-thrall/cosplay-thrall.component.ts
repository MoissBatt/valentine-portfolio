import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../../../service/scroll-service';
import { SectionEnum } from '../../../model/section-enum';

@Component({
  selector: 'app-cosplay-thrall',
  templateUrl: './cosplay-thrall.component.html',
  styleUrls: ['./cosplay-thrall.component.scss']
})
export class CosplayThrallComponent implements OnInit {
  @ViewChild('sectionDivThrall') private sectionDivThrall: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();
  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.THRALL:
        this.scrollService.scrollToElement(this.sectionDivThrall);
        break;
      default:
        console.log('No ' + sectionToScroll + ' to scroll in')
        break;
    }
  }

  clickOnSection(section: string) {
    timer(1).pipe(tap(x => {
      switch (section) {
        case ('TYRANDE'):
          this.scrollService.notifyScroll$(SectionEnum.TYRANDE);
          break;
        case ('RED'):
          this.scrollService.notifyScroll$(SectionEnum.RED);
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
