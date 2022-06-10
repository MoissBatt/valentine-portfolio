import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from '../../service/scroll-service';
import { SectionEnum } from '../../model/section-enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('sectionDivProfile') private sectionDivProfile: ElementRef;
  age!: number;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.age = getAge();
    this.scrollService.getScroll$().pipe(tap(elementToScroll => this.scrollToSpecificSection(elementToScroll))).subscribe();
  }

  public scrollToSpecificSection(sectionToScroll: SectionEnum): void {
    switch (sectionToScroll) {
      case SectionEnum.HOME:
        this.scrollService.scrollToElement(this.sectionDivProfile);
        break;
      default:
        console.log('No ' + sectionToScroll + ' to scroll in')
        break;
    }
  }

  clickOnSection(section: string) {
    timer(1).pipe(tap(x => {
      switch (section) {
        case ('PRESENTATION'):
          this.scrollService.notifyScroll$(SectionEnum.PRESENTATION);
          break;
        case ('FORMATIONS'):
          this.scrollService.notifyScroll$(SectionEnum.FORMATIONS);
          break;
        default:
          console.log('No section: ' + section);
          break;
      }
    })).subscribe();
  }
 
}
function getAge() { 
  var today = new Date(); 
  var birthDate = new Date(1998,8,30,11,52,0,0); 
  var age = today.getFullYear() - birthDate.getFullYear(); 
  var m = today.getMonth() - birthDate.getMonth(); 
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { 
    age--; 
  } 
  return age; 
}