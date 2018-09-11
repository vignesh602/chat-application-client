import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

export class ChatService{
    
    url = 'http://localhost:3000';
    socket = io(this.url);

    sendMessage(message: String){
        this.socket.emit('chat message', message);
    }

    getMessage(){
        let observable = new Observable((observer: any)=>{
            // this.socket = io(this.url);
            this.socket.on('server response', (data:any)=>{
                observer.next(data);
            });
            return ()=>{
                this.socket.disconnect();
            }
        });
        return observable;
    }

    join(data){
        this.socket.emit('join', data);
    }

    getJoinedUsers(){
        let $users = new Observable((observer: any)=>{
            this.socket.on('new user joined', (data:any)=>{
                observer.next(data);
            });
            return ()=>{
                this.socket.disconnect();
            }
        });
        return $users;
    }

    leaveRoom(data){
        this.socket.emit('leave', data);
    }

    getLeftUser(){
        let observable = new Observable((observer: any)=>{
            // this.socket = io(this.url);
            this.socket.on('left room', (data:any)=>{
                observer.next(data);
            });
            return ()=>{
                this.socket.disconnect();
            }
        });
        return observable;
    }

    sendGroupMessage(data){
        this.socket.emit('send message', data);
    }

    getGroupMessage(){
        let observable = new Observable((observer: any)=>{
            // this.socket = io(this.url);
            this.socket.on('new message', (data:any)=>{
                observer.next(data);
            });
            return ()=>{
                this.socket.disconnect();
            }
        });
        return observable;
    }

    sendSingleChat(data){
        this.socket.emit('single chat', data);
    }

    getSingleChat(){
        let $singleChatMessages = new Observable((observer)=>{
            this.socket.on('new message', (data)=>{
                observer.next(data);
            });
            return ()=>{
                this.socket.disconnect();
            }
        });
        return $singleChatMessages;
    }
}