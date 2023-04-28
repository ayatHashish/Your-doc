import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';

export class TestComponent implements OnInit {
 
  updateDataJson: any = {};
  image: string = '';
  base64: string = '';
  imagediplay: any;

  submitregistire(submitinfo: FormGroup) {
    this.updateDataJson['image'] = `${this.base64}`;
    console.log(this.updateDataJson);
  }

  //select image and convert it to base64
  selectimage(e: any) {
    console.log(e);
    if (e.target.files.length > 0) {
      let file = e.target.files[0];
      this.image = file.name;
      this.converttobase64(file);
      console.log('image');
    }
  }
  converttobase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((base64) => {
      this.base64 = base64;
      this.imagediplay = base64;
      console.log(this.base64);
    });
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    };
    fileReader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    };
  }

}
