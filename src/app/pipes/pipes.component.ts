import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
title = "Basic of Pipes";
today = Date();
  constructor() { }
user = {
  name : "Deepak",
  age : 26
}
  ngOnInit(): void {
  }

}
