import { Component, OnInit } from '@angular/core';
import { CommunicationService } from "app/common/communication.service";
import { LoginService } from "app/common/login.service";

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  data;
  data2;
  flaga=false;
  constructor(private communicationService: CommunicationService, private userService:LoginService) {}

   ngOnInit() {
     let sessionId = this.userService.getSessionId();
     this.communicationService.getPlan(sessionId).subscribe(data =>  {console.log("cccc",data); return this.data = data;})

  }


  mapData2(){
      this.flaga = true ;
      if(this.data){
        this.data2= this.data.reduce(function(result, cat){
              if(result[cat.start_time.substring(0,10)]){
                result[cat.start_time.substring(0,10)].push(cat);
              }else{
                result[cat.start_time.substring(0,10)] = [cat];
              }
              console.log(result)
              return result;
            }, {});

}console.log("data", this.data2)}

}
