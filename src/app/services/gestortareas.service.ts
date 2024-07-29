import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class GestortareasService {
  tareas: Tarea[] = [];
  constructor() { }
  agregar(tarea: Tarea): void {
    this.tareas.push(tarea);
  }

}
