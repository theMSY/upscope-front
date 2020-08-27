import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {CrankWheelService} from "../../services/crank-wheel.service";

declare var chrome: any;

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  email = '';
  loading = false;

  constructor(
    private crankWheelService : CrankWheelService
  ) {
  }



  ngOnInit(): void {
  }


  submit(){
    this.loading = true;
    this.crankWheelService.submitEmail(this.email)
      .subscribe(res=>{
        this.triggerPlugin();
      },err=>{
        console.log('already exists');
        this.triggerPlugin();
      })
  }


  triggerPlugin() {
    /*const panel_props = {
      type: 'panel',
      'width': 500,
      'height': 500,
      'left': 0,
      'top': 0,
      url: "chrome-extension://" + environment.crankwheel_id + "/index.html",
    }
    let vid = null;
    chrome.windows.create(panel_props,  (newWindow) => {
      vid = newWindow.id;
    })*/
    this.loading = false;
    window.alert('Your account has been created. You will be redirected to the plugin page')

    window.open("chrome-extension://dooinopjfnhlmmdkdepajfipfhlcmjgp/gen/en_options.html",'_blank')
  }

}
