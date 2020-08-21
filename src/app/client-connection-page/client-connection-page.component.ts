import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {UpscopeService} from "../services/upscope.service";

@Component({
  selector: 'app-client-connection-page',
  templateUrl: './client-connection-page.component.html',
  styleUrls: ['./client-connection-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientConnectionPageComponent implements OnInit {

  id = null;
  data = null;
  constructor(
    private route : ActivatedRoute,
    private sanitizer : DomSanitizer,
    private changeDetectorRef : ChangeDetectorRef,
    private upscope : UpscopeService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.upscope.generateWatchUrl(this.id)
        .subscribe(res => {
          this.data = res;
          this.changeDetectorRef.markForCheck();
        });

    });
  }



  get url(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url.watch_url);
  }

}
