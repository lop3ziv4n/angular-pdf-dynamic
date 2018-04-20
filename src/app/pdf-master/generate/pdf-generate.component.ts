import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf-generate',
  templateUrl: './pdf-generate.component.html',
  styleUrls: ['./pdf-generate.component.css']
})
export class PdfGenerateComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  downloadPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }

}
