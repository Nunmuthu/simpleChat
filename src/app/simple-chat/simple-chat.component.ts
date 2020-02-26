import { Component, OnInit } from '@angular/core';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Component({
  selector: 'app-simple-chat',
  templateUrl: './simple-chat.component.html',
  styleUrls: ['./simple-chat.component.scss']
})
export class SimpleChatComponent implements OnInit {

  senderMsg = '';
  time = '20h';
  msgUser = 'Nunmuthu'
  constructor() { }

  ngOnInit() {
    Swal.fire({
      position: 'top-end',
      // icon: 'success',
      // title: this.msgUser,
      showConfirmButton: false,
      // timer: 1500,
      toast: true,
      html: `
        <div style="width: 400px;">
        <div style="display:inline-block;text-align: left">
        <img src="../../assets/usre.jpeg" alt />
        <span>${this.msgUser}</span>
        </div>
        <div  style="display:inline-block;text-align: right">${this.time}</div>
        </div>
      `,
    });
  }

}
