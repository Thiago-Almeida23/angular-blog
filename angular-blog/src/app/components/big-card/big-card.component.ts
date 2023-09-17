import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() picCover: string = ""
  @Input() cardTitle: string = ""
  @Input() cardDescription: string = ""
  @Input() contentPic: string = ""
  @Input() secondDescription: string = ""
  @Input() Id: string = "0"

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    
    const imageElement = this.el.nativeElement.querySelector('#imageModalTrigger');
    if (imageElement) {
      this.renderer.listen(imageElement, 'click', () => this.openModal());
    }

    const closeModalElement = this.el.nativeElement.querySelector('#closeModal');
    if (closeModalElement) {
      this.renderer.listen(closeModalElement, 'click', () => this.closeModal());
    }
  }

  openModal() {
    const modalElement = this.el.nativeElement.querySelector('#imageModal');
    if (modalElement) {
      modalElement.style.display = 'block';
    }
  }

  closeModal() {
    const modalElement = this.el.nativeElement.querySelector('#imageModal');
    if (modalElement) {
      modalElement.style.display = 'none';
    }
  }
}
