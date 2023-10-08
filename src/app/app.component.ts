import { Component, Input } from '@angular/core';

import {Clipboard} from '@angular/cdk/clipboard';
import { Buffer } from "buffer";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private clipboard: Clipboard) {}
  title = 'Base64 encoder/decoder';

  base64Text : string ='';
  normalText : string ='';

  encodeText() {
    this.base64Text = Buffer.from(this.normalText, 'binary').toString('base64');
  }

  decodeText() {
    this.normalText = Buffer.from(this.base64Text, 'base64').toString('binary');
  }

  changText(_event:any) {
    this.normalText= _event.target.value;
    this.encodeText();
  }

  changeBase64Text(_event:any) {
    this.base64Text= _event.target.value;
    this.decodeText();
  }

  copyClipboard(text : string) {
    this.clipboard.copy(text);
  }
  clear() {
    this.base64Text="";
    this.normalText="";
  }
}
