import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../../../service/scroll-service';
import { SectionEnum } from '../../../model/section-enum';

@Component({
  selector: 'app-cosplay-pb',
  templateUrl: './cosplay-pb.component.html',
  styleUrls: ['./cosplay-pb.component.scss']
})
export class CosplayPbComponent implements OnInit {
  @ViewChild('sectionDivPb') private sectionDivPb: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();

  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.PB:
        this.scrollService.scrollToElement(this.sectionDivPb);
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
        case ('TYRANDE'):
          this.scrollService.notifyScroll$(SectionEnum.TYRANDE);
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
