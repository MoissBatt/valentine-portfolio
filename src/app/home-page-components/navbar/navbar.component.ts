import { Component, OnInit } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from 'src/app/service/scroll-service';
import { SectionEnum } from '../../model/section-enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   status: boolean = false;


  constructor(private scrollService: ScrollService) {
  }

  ngOnInit(): void {
  }

  clickEvent() {
    this.status= true;
  }

  clickOnSection(section: string) {
    timer(1).pipe(tap(x => {
      switch (section) {
        case ('EXPERIENCES'):
          this.scrollService.notifyScroll$(SectionEnum.EXPERIENCES);
          break;
        case ('FORMATIONS'):
          this.scrollService.notifyScroll$(SectionEnum.FORMATIONS);
          break;
        case ('COMPETENCES'):
          this.scrollService.notifyScroll$(SectionEnum.COMPETENCES);
          break;
        case ('HOME'):
          this.scrollService.notifyScroll$(SectionEnum.HOME);
          break;
        case ('PRESENTATION'):
          this.scrollService.notifyScroll$(SectionEnum.PRESENTATION);
          break;
        case ('CONCOURS'):
          this.scrollService.notifyScroll$(SectionEnum.CONCOURS);
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
