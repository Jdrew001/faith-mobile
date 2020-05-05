import { Directive, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutoScroll]'
})
export class AutoScrollDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    if (this.el) {
      let item = document.getElementById('active');
      
      let segment = document.getElementById('segment');
      setTimeout(() => {
        let location = item.getBoundingClientRect();
        segment.scrollLeft = location.left - 7;
      }, 1000);
    }
  }

}