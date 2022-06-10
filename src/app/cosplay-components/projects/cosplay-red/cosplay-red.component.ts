import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../../../service/scroll-service';
import { SectionEnum } from '../../../model/section-enum';

@Component({
  selector: 'app-cosplay-red',
  templateUrl: './cosplay-red.component.html',
  styleUrls: ['./cosplay-red.component.scss']
})
export class CosplayRedComponent implements OnInit {
  @ViewChild('sectionDivRed') private sectionDivRed: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();
  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.RED:
        this.scrollService.scrollToElement(this.sectionDivRed);
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
        case ('THRALL'):
          this.scrollService.notifyScroll$(SectionEnum.THRALL);
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
