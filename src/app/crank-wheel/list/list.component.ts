import {Component, OnInit} from '@angular/core';
import {CrankWheelService} from "../../services/crank-wheel.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  loading = true;
  managers: any = [];

  constructor(
    private crankWheelService: CrankWheelService
  ) {
  }

  ngOnInit(): void {
    this.crankWheelService.all()
      .subscribe((res: any) => {
        this.loading = false;
        this.managers = res?.members;
      })
  }

}
