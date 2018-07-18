import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-dentist-chennai',
  templateUrl: './dentist-chennai.component.html',
  styleUrls: ['./dentist-chennai.component.css']
})
export class DentistChennaiComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
modelsignUp()
{
   this.router.navigateByUrl('/sign-up');
}

}
