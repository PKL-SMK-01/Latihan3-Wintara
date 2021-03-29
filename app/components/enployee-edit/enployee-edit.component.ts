import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enployee } from 'src/app/enployee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-enployee-edit',
  templateUrl: './enployee-edit.component.html',
  styleUrls: ['./enployee-edit.component.css']
})
export class EnployeeEditComponent implements OnInit {

  id:any;
  data:any;
  enployee = new Enployee();

  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.dataService.getEnployeeById(this.id).subscribe(res => {
      this.data = res;
      this.enployee = this.data;
    })
  }
  
  updateEnployee(){
    this.dataService.updateData(this.id, this.enployee).subscribe(res => {
      this.getData();
    })
  }

}
