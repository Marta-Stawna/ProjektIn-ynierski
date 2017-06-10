import { Component, OnInit,Output , EventEmitter} from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Output() labelEmitter = new EventEmitter();
  @Output() planEmitter = new EventEmitter();
  private data;
  private changedData;
  private labels;
  constructor(private communicationService: CommunicationService, private userService:LoginService) {
    setTimeout(()=>this.mapData(),1000);
  }


   ngOnInit() {
     let sessionId = this.userService.getSessionId();
     this.communicationService.getPlan(sessionId).subscribe(data =>this.data = data);
}

  mapData(){
      if(this.data){
      this.changedData = this.data.reduce(function(result, item, index){
                    if(result[item.start_time.substring(0,10)]){
                      result[item.start_time.substring(0,10)].push(item);
                    }else{
                      result[item.start_time.substring(0,10)] = [item];}
                    return result;
                  }, {});
      this.labels = Object.keys(this.changedData);
      this.labelEmitter.emit(this.labels);
      this.planEmitter.emit(this.changedData)
    }
}
}
