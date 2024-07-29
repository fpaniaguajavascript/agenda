import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';//IMPORT POR NGMODEL
import { GestortareasService } from '../../services/gestortareas.service';
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],//IMPORT POR NGMODEL
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public nombre: string = "";
  public fecha: string = "";

  constructor(public gestorTareas: GestortareasService) {
  }
  crearTarea() {
    const nuevaTarea: Tarea = {
      nombre: this.nombre,
      fecha: this.fecha
    }
    this.gestorTareas.agregar(nuevaTarea);
  }
}