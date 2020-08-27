import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CrankWheelService} from "../../services/crank-wheel.service";
import {switchMap} from "rxjs/operators";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchComponent implements OnInit {
  loading = true;
  url = null;

  constructor(
    private route: ActivatedRoute,
    private crankWheelService: CrankWheelService,
    private changeDetectorRef: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.route
      .paramMap
      .pipe(
        switchMap(params => {
          return this.crankWheelService.url(params.get('email'));
        })
      ).subscribe((res: any) => {
      this.url = res.url;
      this.loading = false;
      this.changeDetectorRef.markForCheck();
    });
  }

  sanitizedUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
  }
}
