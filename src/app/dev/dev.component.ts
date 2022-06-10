import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../service/scroll-service';
import { SectionEnum } from '../model/section-enum';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {
  @ViewChild('sectionDivExperience') private sectionDivExperience: ElementRef;
  @ViewChild('sectionDivFormation') private sectionDivFormation: ElementRef;
  @ViewChild('sectionDivCompetence') private sectionDivCompetence: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();
  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    timer(1).pipe(tap(x => {
      switch (sectionToScroll) {
        case SectionEnum.COMPETENCES:
          this.scrollService.scrollToElement(this.sectionDivCompetence);
          break;
        case SectionEnum.EXPERIENCES:
          this.scrollService.scrollToElement(this.sectionDivExperience);
          break;
        case SectionEnum.FORMATIONS:
          this.scrollService.scrollToElement(this.sectionDivFormation)
          break;
        default:
          console.log('No ' + sectionToScroll + ' to scroll in')
          break;
      }
    })).subscribe();
  }
  
}


