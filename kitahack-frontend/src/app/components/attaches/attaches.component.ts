import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attaches',
  templateUrl: './attaches.component.html',
  styleUrl: './attaches.component.css'
})
export class AttachesComponent {

  @Input() value: any

  constructor(private http: HttpClient) {

  }


  download() {
    const fileUrl = this.value.file.url

    this.http.get(fileUrl, { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const blob = new Blob([data]);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = this.value.title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }
}
