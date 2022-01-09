import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = "https://5z3s2k5qz7.execute-api.ap-south-1.amazonaws.com";
  constructor(private http:HttpClient) { }

  public GetItems():Observable<any>{
    return this.http.get(this.baseUrl+'/getall');
  }
  public AddItems(data:object):Observable<any>{
    return this.http.put(this.baseUrl+'/add-data',data);
  }

}
