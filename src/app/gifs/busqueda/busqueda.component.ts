import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  // Con este decorador podemos acceder al input del html del componente.
  // Primero en el html se debe crear una referencia local con #txtBuscar.
  // El signo de admiracion ! se coloca para decirle a TypeScript que no de error porque piense que el txtBuscar
  // Podria ser nulo, ya que esta en modo super estricto. Lo que se logra con esto es decirle que confie que eso va a 
  // Existir siempre, es llamado como "Non-null assertion operator" https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator


  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    console.log(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
