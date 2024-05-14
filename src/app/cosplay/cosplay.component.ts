import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap } from 'rxjs';
import { ScrollService } from '../service/scroll-service';
import { SectionEnum } from '../model/section-enum';

@Component({
  selector: 'app-cosplay',
  templateUrl: './cosplay.component.html',
  styleUrls: ['./cosplay.component.scss']
})
export class CosplayComponent implements OnInit {
  @ViewChild('sectionDivPresentation') private sectionDivPresentation: ElementRef;
  @ViewChild('sectionDivConcours') private sectionDivConcours: ElementRef;
  @ViewChild('sectionDivProjets') private sectionDivProjets: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();

  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.PRESENTATION:
        this.scrollService.scrollToElement(this.sectionDivPresentation);
        break;
      case SectionEnum.CONCOURS:
        this.scrollService.scrollToElement(this.sectionDivConcours);
        break;
      case SectionEnum.PROJETS:
        this.scrollService.scrollToElement(this.sectionDivProjets)
        break;
      default:
        console.log('No ' + sectionToScroll + ' to scroll in')
        break;
    }
  }
  
}
