import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  page = 1;
  pdfSrc = '';
  pageUrl: SafeResourceUrl;
  pdfShow: boolean;

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.pdfSrc = '/assets/demo.pdf';
    this.pdfShow = false;
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

  onPdfSelected() {
    this.pageUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
    this.pdfShow = !this.pdfShow;
  }
}
