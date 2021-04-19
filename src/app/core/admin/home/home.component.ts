import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  images = ["assets/img/default/food-4.jfif", "assets/img/default/food-5.jfif", "assets/img/default/food-6.jfif"]
  showModal: boolean;
  res_name: string;
  private router: Router;
  booking_Data=[];
  searchKeyword ='';

    // Modal
    modal: BsModalRef;
    modalConfig = {
      keyboard: true,
      class: "modal-dialog"
    };

    userForm = {
      username:'',
      contact_no:'',
      email:'',
      date:new Date(),
      time:'',
      session:''
    }

  rows: any = [
    {
      image:"https://images.unsplash.com/photo-1618438051743-35f46137a5e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "Wagnes",
      address: "Jalan Sentosa, Kuala Lumpur",
      desc: "Lorem Ipsum used",
      type: "Western",
      rating: "4.6"
    },
    {
      image: "https://images.unsplash.com/photo-1553443175-e1ce8896d8f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80",
      name: "The Bangkok Restaurant",
      address: "Jalan Bahagia, Cheras",
      desc: "Lorem Ipsum used ",
      type: "Thailand Cuisine",
      rating: "4.1"
    },
    {
      image: "https://images.unsplash.com/photo-1594865119954-ce4a44b97b67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      name: "Donna's Dinner",
      address: "Jalan Jalan, Petaling Jaya",
      desc: "Lorem Ipsum used ",
      type: "Dessert and Chill",
      rating: "3.8"
    },
    {
      image: "https://images.unsplash.com/photo-1526732779586-14c73df166b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1988&q=80",
      name: "Wagyu Restaurant",
      address: "Jalan Sara, Damansara",
      desc: "Lorem Ipsum used",
      type: "Japanese Cuisine",
      rating: "4.5"
    }
  ]

  constructor(
    private modalService: BsModalService,
  ) { }


  ngOnInit() {
    console.log("data tadi", this.booking_Data)
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  hide() {
    this.showModal = false;
  }

  reserve(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.res_name=row.name;
  }

  navigatePage(path: String) {
    if (path == "login") {
      return this.router.navigate(["/auth/login"]);
    }
  }

  onSubmit() {

    const data: any = {};
    data.username = this.userForm.username;
    data.contact_no = this.userForm.contact_no;
    data.email=this.userForm.email;
    data.date = this.userForm.date;
    data.time = this.userForm.time;
    data.session = this.userForm.session;
    console.log("ini data",data);
    this.booking_Data.push(data);
    console.log("array tu",this.booking_Data)
    this.showModal=false;
  }


}
