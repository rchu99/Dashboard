import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private firestore: AngularFirestore ) { }

  form = new FormGroup({
          newUsers: new FormControl(''),
          customerName: new FormControl(''),
          orderNumber: new FormControl(''),
          coffeeOrder: new FormControl(''),
          completed: new FormControl(false)
      })

   createNewUsers(data) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection("newUsers")
        .add(data)
        .then(res => {}, err => reject(err));
        });
        }

  getNewUsers() {
  return this.firestore.collection("newUsers").snapshotChanges();
  }

  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
  }, {
      name: 'Internet Explorer',
      y: 11.84
  }, {
      name: 'Firefox',
      y: 10.85
  }, {
      name: 'Edge',
      y: 4.67
  }, {
      name: 'Safari',
      y: 4.18
  }, {
      name: 'Other',
      y: 7.05
  }]
  }

}
