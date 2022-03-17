import { Component } from '@angular/core';
     
class Item{
    device: string;
    done: boolean;
    price: number;
     
    constructor(device: string, price: number) {
  
        this.device = device;
        this.price = price;
        this.done = false;
    }
}
 
@Component({
    selector: 'devicelist',
    template: `<div class="page-header">
        <h1> Список девайсов </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Девайс</th>
                    <th>Цена</th>
                    <th>Наличие</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.device}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
    text: string = "";
    price: number = 0;
     
    items: Item[] = 
    [
        { device: "Huawei P40", done: true, price: 40000 },
        { device: "Samsung Galaxy A20", done: false, price: 60000 },
        { device: "Huawei Matebook 13", done: true, price: 85000 },
        { device: "Huawei Vision 16'", done: false, price:70000 }
    ];
    addItem(text: string, price: number): void {
         
        if(text==null || text.trim()=="" || price==null)
            return;
        this.items.push(new Item(text, price));
    }
}