import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment, urlVR } from 'src/environments/environment';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const res = window.location.href.replace(environment.local, "");
    if(!Number.isNaN(Number(res))) {
      window.location.href = urlVR + res;
    } else {
      this.router.navigate([""]);
    }
  }

}
