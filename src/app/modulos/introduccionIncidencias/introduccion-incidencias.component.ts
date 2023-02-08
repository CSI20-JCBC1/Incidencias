import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidenciasService } from 'src/app/compartido/servicios/incidencias.service';

@Component({
  selector: 'app-introduccion-incidencias',
  templateUrl: './introduccion-incidencias.component.html',
  styleUrls: ['./introduccion-incidencias.component.css']
})
export class IntroduccionIncidenciasComponent {

  //Propiedades
  datosIncidencia: any;
  date = new Date();

  //Formulario reactivo
  incidencia = this.fb.group({
    persona: ['', Validators.required],
    lugar: ['', Validators.required],
    descripcion: ['', Validators.required],
    fecha: [this.date.toLocaleDateString()],
    responsable: [null],
    estado: [null],
    solucion: [null],
    revisada: [false]
  });

  constructor(
    private incidenciasService: IncidenciasService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  introducirIncidencia(){
    this.datosIncidencia = this.incidencia.value;

    if (this.incidencia.valid) {

      this.incidenciasService.create(this.datosIncidencia).then(
        () => {
          this.incidencia.reset();
          alert("Registro incidencia completado");
        },
        (error) => {
          this.incidencia.reset();
          alert("Error");
          console.log(error);
        }
      );

    }else{
      this.incidencia.reset();
      alert("Complete los campos");
    }

  }
}
