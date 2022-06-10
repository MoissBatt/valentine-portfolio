import { Component, OnInit } from '@angular/core';
import { tap, timer } from 'rxjs';
import { ScrollService } from 'src/app/service/scroll-service';
import { SectionEnum } from '../../model/section-enum';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  clickOnSection(section: string) {
    timer(1).pipe(tap(x => {
      switch (section) {
        case ('RED'):
          this.scrollService.notifyScroll$(SectionEnum.RED);
          break;
        case ('THRALL'):
          this.scrollService.notifyScroll$(SectionEnum.THRALL);
          break;
        case ('TYRANDE'):
          this.scrollService.notifyScroll$(SectionEnum.TYRANDE);
          break;
        case ('PB'):
          this.scrollService.notifyScroll$(SectionEnum.PB);
          break;
        case ('STEAMPUNK'):
          this.scrollService.notifyScroll$(SectionEnum.STEAMPUNK);
          break;
        default:
          console.log('No section: ' + section);
          break;
      }
    })).subscribe();
  }
}
