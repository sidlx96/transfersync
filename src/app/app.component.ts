import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transfersync';
  public searchKey:string = "";
  public latestData :any = "";
  
  constructor(private apiService: ApiService){

  }

  public onClear(){
    this.searchKey = "";
  }
  public AddItem(){
    this.apiService.AddItems({"data":this.searchKey}).subscribe((res)=>{
      this.GetItem();
    });
  }

  public GetItem(){

    this.apiService.GetItems().subscribe((res)=>{
      console.log(res);
      if(res.Count>0){
        this.latestData = res.Items[0].data;          
      }

    });
  }
}
