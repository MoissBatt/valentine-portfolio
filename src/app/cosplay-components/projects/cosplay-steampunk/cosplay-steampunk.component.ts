import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../../../service/scroll-service';
import { SectionEnum } from '../../../model/section-enum';

@Component({
  selector: 'app-cosplay-steampunk',
  templateUrl: './cosplay-steampunk.component.html',
  styleUrls: ['./cosplay-steampunk.component.scss']
})
export class CosplaySteampunkComponent implements OnInit {
  @ViewChild('sectionDivSteampunk') private sectionDivSteampunk: ElementRef

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();
  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.STEAMPUNK:
        this.scrollService.scrollToElement(this.sectionDivSteampunk);
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
        case ('PB'):
          this.scrollService.notifyScroll$(SectionEnum.PB);
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
