import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public lat: number = -33.3603100;
  public lng: number = -70.6374500;
  public zoom: number = 15;

  constructor() { }

  ngOnInit() { }

  subscribe(){ }

}