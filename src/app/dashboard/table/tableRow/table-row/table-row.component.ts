import { Component, OnInit,Output , EventEmitter, Input} from '@angular/core';
import { CommunicationService } from 'app/common/communication.service';
import { LoginService } from 'app/common/login.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Output() labelEmitter = new EventEmitter();
  @Output() planEmitter = new EventEmitter();
  @Input() public roomId;
  private data = [];
  private changedData;
  private labels;
  constructor(private communicationService: CommunicationService, private userService:LoginService) {}

  ngOnInit() {}

  ngOnChanges() {
    let sessionId = this.userService.getSessionId();
    this.communicationService.getPlan(sessionId, this.roomId)
    .subscribe(data => {
      this.data = data;
      this.mapData();
    });
  }

  mapData() {
    this.changedData = this.data.reduce((result, item, index) => {
      if(result[item.start_time.substring(0,10)]){
          result[item.start_time.substring(0,10)].push(item);
      } else {
        result[item.start_time.substring(0,10)] = [item];
      }

        return result;
      }, {});

      this.labels = Object.keys(this.changedData);
      if(this.labels.length == 5)
      this.labelEmitter.emit(this.labels);
      this.planEmitter.emit(this.changedData)
    }
}
