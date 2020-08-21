import { Component, OnInit } from '@angular/core';
import {UpscopeService} from "../services/upscope.service";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  visitors = []
  constructor(
    private upscopeService: UpscopeService
  ) { }

  ngOnInit(): void {
    this.upscopeService.all().subscribe(res=>{
      this.visitors = res['visitors']
    })
  }


  status(visitor){
    return visitor.is_online ? "online" : "offline";
  }

}
