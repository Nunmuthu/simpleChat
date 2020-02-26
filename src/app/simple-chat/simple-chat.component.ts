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
  msgUser = 'Nunmuthu';
  msg = [];
  constructor() { }

  ngOnInit() {

  }

  notificationAlert(msgPasser: string) {
    if (msgPasser === 'sender' && this.senderMsg != '') {
      Swal.fire({
        position: 'bottom-start',
        // icon: 'success',
        // title: this.msgUser,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
        html: `
        <div style="width: 400px;">
        <div style="display:inline-block;text-align: left;align-items: left;">
        <img src="../../assets/usre.jpeg" alt />
        
        </div>
        <div class="time" style="display:inline-block;">
        <span style="font-weight: bolder;">${this.msgUser}</span><br/>
        <span>${this.time}</span></div>
        </div>
      `,
        customClass: {
          content: 'content-class'
        }
      });
    }
    if (this.senderMsg != '')
      this.msg.push({ MSG: this.senderMsg, CLASS: msgPasser })
  }

}
