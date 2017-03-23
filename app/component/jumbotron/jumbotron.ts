import { Component } from '@angular/core';
@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.html'
})
export class Jumbotron {
    //breading='My website'
    private Heading:string;
    private JbcText:string;
    private JbcBtn:string;
    private JbcUrl:string;

    constructor(){
        this.Heading='Hello, world!';
        this.JbcText='This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
        this.JbcBtn='Learn more';
        this.JbcUrl='/about';
    }
 }