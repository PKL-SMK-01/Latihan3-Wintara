import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/enployees');
  }

  insertData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/addEnployees', data);
  }

  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteEnployees/'+id);
  }

  getEnployeeById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/enployees/'+id);
  }

  updateData(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateEnployees/'+id, data);
  }
}
