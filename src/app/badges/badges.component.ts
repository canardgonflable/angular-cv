import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-badges",
  templateUrl: "./badges.component.html",
  styleUrls: ["./badges.component.scss"]
})
export class BadgesComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
}
