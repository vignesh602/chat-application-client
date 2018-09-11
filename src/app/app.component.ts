import { Component } from '@angular/core';
import { ChatService } from './app.chatService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-app';

  messages = [];
  connection;
  connectedUsers =[];
  activatedUser;
  openChat;
  userConvo;
  joinedUser;
  sendingUserInfo = [];

  constructor(
    private service: ChatService
  ){
    // this.connection = service.getMessage()
    // .subscribe(message =>{
    //   this.messages.push(message);
    //   console.log(message);
    // });

    // let usersJoined = service.getJoinedUsers().subscribe(data=>{
    //   this.connectedUsers.push(data);
    //   console.log(this.connectedUsers);
    // });

    // let singleChatMessages = service.getSingleChat().subscribe(data =>{
    //     this.messages.push(data);
    //     console.log(this.messages)
    // });
  }

  // join(user){
  //   this.service.join(user);
  //   this.joinedUser = user;
  // }

  // // send(text){
  // //     this.messages.push(text);
  // //      this.service.sendMessage(text);
  // // }
  // send(text){
  //     this.messages.push(text);
  //     this.userConvo = this.activatedUser;
  //     this.userConvo.from = this.joinedUser;
  //     this.userConvo.message = text;
  //     let sendingUser = {from: this.joinedUser, message: text};
  //     this.sendingUserInfo.push(sendingUser);
  //     this.service.sendSingleChat(this.userConvo);
  // }

  // clickedUser(user){
  //   console.log(user);
  //   this.activatedUser = {id: user.id, to: user.name};
  //   this.openChat=true;
  // }
}
