import { Component, OnInit, NgZone, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent implements OnInit {

  data;
  public data2;
  public flaga=false;
  changeDetectorRefs:ChangeDetectorRef[] = [];
  constructor(private communicationService: CommunicationService, private userService:LoginService ,private ref: ChangeDetectorRef, private zone: NgZone) {
    this.zone.run(() => this.tick());
    setTimeout(() => {
      this.mapData2();
      // the following is required, otherwise the view will not be updated
      this.ref.markForCheck();
    }, 1000);
  }

   ngOnInit() {
     let sessionId = this.userService.getSessionId();
     this.communicationService.getPlan(sessionId).subscribe(data =>  {console.log("cccc",data); return this.data = data;});

  }

  mapData2(){
      this.flaga = true ;
      if(this.data){
        this.data2 = this.data.reduce(function(result, cat){
              if(result[cat.start_time.substring(0,10)]){
                result[cat.start_time.substring(0,10)].push(cat);
              }else{
                result[cat.start_time.substring(0,10)] = [cat];
              }
              return result;
            }, []);

}
console.log("data", typeof this.data2, this.data2['2017-06-12']);
return this.data2;}

tick() {
  this.changeDetectorRefs
    .forEach((ref) => ref.detectChanges());
}

}
