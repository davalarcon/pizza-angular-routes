import {
        Component,
        OnInit,
        Input
      } from '@angular/core';

@Component({
  selector: 'pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  @Input() pizzaArray: any[];


  constructor() { }

  ngOnInit() {
  }

}
