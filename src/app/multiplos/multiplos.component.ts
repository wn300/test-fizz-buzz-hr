import { Component, OnInit } from '@angular/core';
import { ResultSharedService } from '../services/result-shared.service';

@Component({
  selector: 'app-multiplos',
  templateUrl: './multiplos.component.html',
  styleUrls: ['./multiplos.component.css']
})
export class MultiplosComponent implements OnInit {
  public numerouno: string = "";
  public numerodos: string = "";
  public one: string = "";
  public division: number;
  public divisiono: number;
  public final: String = "";
  public oneo: any[] = [];
  public inicial: number;
  public index: number;
  public cantidad: any[] = [];
  public longitud: number;


  constructor(public resultSharedService: ResultSharedService) { }

  ngOnInit() {
  }

  generate() {
    this.oneo = [];
    this.index = 0;
    this.cantidad = [];
    this.numerodos = (parseFloat(this.numerouno) + 99).toString();

    for (var i = 0; i < 100; i++) {

      this.one = (parseFloat(this.numerouno) + i).toString();
      this.division = (parseFloat(this.one) % 3);
      this.divisiono = (parseFloat(this.one) % 5);
      this.cantidad = this.one.split('');
      
      if ((this.division === 0) && (this.divisiono === 0)) {
        this.one = "FIZZ-BUZZ";
      }
      else {
        if (this.division === 0) {
          this.one = "FIZZ";
        }
        if (this.divisiono === 0) {
          this.one = "BUZZ";
        }
        else {
          this.cantidad.forEach((data:any) => {
            if (data === '5') {
              this.one = "BUZZ";
            }
            if (data === '3'){
              this.one = "FIZZ";
            }
          })
          this.one = this.one;
        }
      }
      this.oneo.push({ result: this.one });
    }
    this.resultSharedService.setVariable(this.oneo);    
  }

  clear() {
    this.oneo = [];
    this.numerouno = "";
    this.numerodos = "";
  }

}
