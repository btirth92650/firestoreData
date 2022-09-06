import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs';
import { Data } from '../data';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {

  data:any = []
  constructor(private dataService:FireserviceService, private router:Router) { }

  ngOnInit(): void {
    this.getAllData()
  }
  backtogal(){
    this.router.navigate(['dashbord'])
  }

  // get all data 

  getAllData(){
    this.dataService.getData().subscribe((res)=>{      
      this.data = res
    })
  }

  deleteData(data:Data){
    let decision = confirm("Are You Sure You Want To Delete This Data ?");
    if(decision == true){
      this.dataService.deleteData(data)
    }
  }

  updateData(data:any){
    debugger
    this.dataService.setDataById(data)
    this.router.navigate(['registrationform',data.id])
  }

}
