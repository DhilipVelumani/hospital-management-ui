import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
speciality=['dentist','Gynecologist/obstetrician'];
location=['chennai','coimbatore','mumbai','kolkata'];
search()
{
  //window.location.href = '../dentist-chennai';
    this.router.navigateByUrl('/dentist-chennai');
}
}
