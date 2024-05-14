import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../../../service/scroll-service';
import { SectionEnum } from '../../../model/section-enum';

@Component({
  selector: 'app-cosplay-talanji',
  templateUrl: './cosplay-talanji.component.html',
  styleUrls: ['./cosplay-talanji.component.scss']
})
export class CosplayTalanjiComponent implements OnInit {

  @ViewChild('sectionDivTalanji') private sectionDivTalanji: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();
  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.TALANJI:
        this.scrollService.scrollToElement(this.sectionDivTalanji);
        break;
      default:
        console.log('No ' + sectionToScroll + ' to scroll in')
        break;
    }
  }

  clickOnSection(section: string) {
    timer(1).pipe(tap(x => {
      switch (section) {
        case ('STEAMPUNK'):
          this.scrollService.notifyScroll$(SectionEnum.STEAMPUNK);
          break;
        case ('TARECGOSA'):
          this.scrollService.notifyScroll$(SectionEnum.TARECGOSA);
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
