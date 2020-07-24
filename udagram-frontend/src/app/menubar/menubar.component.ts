import { Component, OnInit } from '@angular/core';
//import { environment } from '../../environments/environment';
import { feedenvironment } from '../../environments/environment';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  public appName = feedenvironment.appName;

  constructor() { }

  ngOnInit() {}

}
