import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../../../service/scroll-service';
import { SectionEnum } from '../../../model/section-enum';

@Component({
  selector: 'app-cosplay-tyrande',
  templateUrl: './cosplay-tyrande.component.html',
  styleUrls: ['./cosplay-tyrande.component.scss']
})
export class CosplayTyrandeComponent implements OnInit {
  @ViewChild('sectionDivTyrande') private sectionDivTyrande: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();
  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.TYRANDE:
        this.scrollService.scrollToElement(this.sectionDivTyrande);
        break;
      default:
        console.log('No ' + sectionToScroll + ' to scroll in')
        break;
    }
  }

  clickOnSection(section: string) {
    timer(1).pipe(tap(x => {
      switch (section) {
        case ('PB'):
          this.scrollService.notifyScroll$(SectionEnum.PB);
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
