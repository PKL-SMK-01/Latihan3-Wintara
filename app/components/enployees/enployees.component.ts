import { Component, OnInit } from '@angular/core';
import { Enployee } from 'src/app/enployee';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-enployees',
  templateUrl: './enployees.component.html',
  styleUrls: ['./enployees.component.css']
})
export class EnployeesComponent implements OnInit {

  enployees:any;
  enployee = new Enployee;

  success='';
  failed='';

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getEnployeesData();
  }

  getEnployeesData(){
    this.dataService.getData().subscribe(res =>{
      this.enployees = res;
    });
  }

  insertData(){
    this.dataService.insertData(this.enployee).subscribe(res => {
      this.getEnployeesData();
      this.success='Added success';
      
      if(!this.enployee) {
        this.failed=' Add Failed ';
      }
      console.log(res);
    })
  }

  deleteData(id){
    this.dataService.deleteData(id).subscribe(res => {
      this.getEnployeesData();
      this.success='Delete success';
      
      if(!this.enployee) {
        this.failed=' Delete Failed ';
      }
      console.log(res);
    })
  }

}
