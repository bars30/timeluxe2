import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { enviroenment } from 'src/enviroenments/enviroenment';

interface Message {
  fulln : string,
  mail : string,
  message: string
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  messageObject: Message = {
    fulln : '',
    mail : '',
    message: ''
  };
  messageSend: boolean = false;
  showText: boolean = false;
  cont: string = ''
  reactiveForm: FormGroup = new FormGroup({
    full_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  })

  constructor(private req: RequestService){}
  onFormSubmitted(){
    if(
      this.messageObject.fulln == this.reactiveForm.value.full_name
      && this.messageObject.mail == this.reactiveForm.value.email
      && this.messageObject.message == this.reactiveForm.value.message
    ){
      this.cont = `Don't send the same message twice.`
    }else {
      this.messageObject.fulln = this.reactiveForm.value.full_name;
      this.messageObject.mail = this.reactiveForm.value.email;
      this.messageObject.message = this.reactiveForm.value.message;
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.valid);
    
    this.req.post<Message>(enviroenment.usermessage.get, this.messageObject ).subscribe((res)=>{
      console.log('Everything is ok');
      this.cont = `Your message has been successfully sent.`
      this.messageSend = true;
      this.reactiveForm.reset();
      this.setTimeMessage()
    })
  
    }
  }
  setTimeMessage(){
    setTimeout(() => {
      this.messageSend = false;
    }, 2500);
  }
  showTextFunc(){
    if(!this.reactiveForm.valid){
      this.showText = !this.showText
    }
  }
}
