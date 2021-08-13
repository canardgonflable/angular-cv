import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-xp",
  templateUrl: "./xp.component.html",
  styleUrls: ["./xp.component.scss"]
})
export class XpComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
}
