import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../../../service/scroll-service';
import { SectionEnum } from '../../../model/section-enum';

@Component({
  selector: 'app-cosplay-tarecgosa',
  templateUrl: './cosplay-tarecgosa.component.html',
  styleUrls: ['./cosplay-tarecgosa.component.scss']
})
export class CosplayTarecgosaComponent implements OnInit {

  @ViewChild('sectionDivTarecgosa') private sectionDivTarecgosa: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();
  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.TARECGOSA:
        this.scrollService.scrollToElement(this.sectionDivTarecgosa);
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
