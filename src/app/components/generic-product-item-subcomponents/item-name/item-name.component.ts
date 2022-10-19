import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-name',
  templateUrl: './item-name.component.html',
  styleUrls: ['./item-name.component.css'],
})
export class ItemNameComponent implements OnInit {
  //
  @Input() id: string = '';
  @Input() name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
