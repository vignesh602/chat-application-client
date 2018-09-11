import { Component, OnInit } from '@angular/core';
import { ChatService } from '../app.chatService';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css']
})
export class GroupChatComponent implements OnInit {

  messages = [];
  text ='';
  constructor(
    private service: ChatService
  ) { 
    service.getJoinedUsers().subscribe(data => {
      this.messages.push(data);
      console.log(data);
    });

    service.getLeftUser().subscribe(data=>{
      this.messages.push(data);
    });

    service.getGroupMessage().subscribe(data=>{
      this.messages.push(data);
    })
  }

  ngOnInit() {
  }

  join(user,room){
    console.log(user,room);
    let data = {user: user, room: room}
    this.service.join(data);
  }

  leave(user,room){
    let data = {user: user, room: room};
    this.service.leaveRoom(data);
  }

  send(user,room){
    this.service.sendGroupMessage({user:user,room:room,message:this.text});
    this.text = '';
  }

}
