import { contacts } from './../contact';
import { userContact } from './../userContact';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: userContact[];
  newContact: any = {};
  constructor() { }

  ngOnInit() {
  // initialize your contacts here
  this.contacts=contacts;
  }

  addContact(newContact): any {
    console.log('Add contact has been called');
     // Fill your code here
    // add contact to contacts list
    console.log(newContact);
    const newObj: userContact =Object.assign({},this.newContact);
    this.newContact.name=newContact.name;
    this.newContact.email=newContact.email;
    this.newContact.phoneNumber=newContact.phoneNumber;
    this.newContact.image=newContact.image;
    contacts.push(newObj);
    console.log(contacts);
    
  }
  formReset(formval : NgForm){
    formval.reset();
  }
}
