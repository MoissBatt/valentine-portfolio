import { ElementRef, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SectionEnum } from '../model/section-enum';

@Injectable()
export class ScrollService {
    private scroll$ = new Subject<SectionEnum>();

    public getScroll$(): Observable<SectionEnum> {
        return this.scroll$.asObservable(); 
    }

    public notifyScroll$(sectionToScroll: SectionEnum) {
        this.scroll$.next(sectionToScroll)
    }

    scrollToElement(elementToScroll: ElementRef) {
        setTimeout(() => {
          elementToScroll.nativeElement.scrollIntoView({ behavior: 'smooth' });
        });
      }
}