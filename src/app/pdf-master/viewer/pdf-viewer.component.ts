import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  page = 1;
  pdfSrc = '';

  constructor() {
  }

  ngOnInit() {
    this.pdfSrc = '/assets/demo.pdf';
  }

  onFileSelected() {
    const img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer(img.files[0]);
    }
  }
}
