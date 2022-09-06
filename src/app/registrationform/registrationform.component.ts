import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';
import { Data } from '../data';
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {

  editData:any = []
  userId:any
  form!: FormGroup
  isEditable: boolean = false

  constructor(private formbuilder: FormBuilder, private router: Router, private dataService: FireserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.buildForm()

  this.route.params.subscribe((param:any )=>{
    this.userId = param['id']

    if(this.userId != undefined){
      this.isEditable = true;
      this.getDataById()
    }else{
      this.isEditable = false;
    }
      
  })

}

public buildForm(){
  this.form = this.formbuilder.group({
    Name: "",
    Address: "",
    PinCode: "",
    Password: "",
    MobilNumber: "",

  });
}


  submit() {
    const payload: Data = {
      id: '',
      data_name: this.form.value.Name,
      data_address: this.form.value.Address,
      data_pincode: this.form.value.PinCode,
      data_mobileNo: this.form.value.MobilNumber,
      data_password: this.form.value.Password
    }

    if(this.userId != undefined){

      this.dataService.updateData(this.userId,payload).then(()=>{
        alert("Data Update Successfully")
        this.form.reset()
        this.router.navigate(['datalist'])
      })


    }else{
      this.dataService.addData(payload).then((res)=>{
        if(res){
          alert('Data Added Succesfully')
          this.form.reset()
        }
      })
    }

  }

  backtogal(){
    this.router.navigate(['dashbord'])
  }

  getDataById(){
      this.editData = this.dataService.getDataById()
        this.form.controls['Name'].setValue(this.editData.data_name)
        this.form.controls['Address'].setValue(this.editData.data_address)
        this.form.controls['PinCode'].setValue(this.editData.data_pincode)
        this.form.controls['MobilNumber'].setValue(this.editData.data_mobileNo)
        this.form.controls['Password'].setValue(this.editData.data_password)
    }


}
