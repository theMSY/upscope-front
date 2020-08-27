import {Component, OnInit} from '@angular/core';
import {UpscopeService} from "../../services/upscope.service";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  visitors = []
  loading = true;

  constructor(
    private upscopeService: UpscopeService
  ) {
  }

  ngOnInit(): void {
    this.fetch();
  }


  status(visitor) {
    return visitor.is_online ? "online" : "offline";
  }


  fetch() {
    this.loading = true;
    this.upscopeService.all().subscribe(res => {
      this.visitors = res['visitors']
      this.loading = false;
    })
  }

}
