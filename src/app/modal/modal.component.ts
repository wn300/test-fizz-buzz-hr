import { Component, OnInit } from '@angular/core';
import { ResultSharedService } from '../services/result-shared.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public respuestaServicioCompartido: any;

  constructor(public resultSharedService: ResultSharedService) {
    this.resultSharedService.getVariable()
      .subscribe((chimuelo: any) => {
        this.respuestaServicioCompartido = chimuelo;
        console.log(this.respuestaServicioCompartido);
        document.getElementById('btn_modal').click();
      });
  }

  ngOnInit() {
  }

}
