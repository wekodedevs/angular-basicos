import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironam', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string | undefined = '';
  //heroesBorrados: string[] = [];
  
  //La meve manera
  /*borrarHeroe(): void{
    const heroeBorrdo = this.heroes.shift();
    if (heroeBorrdo!) {
      this.heroesBorrados.push(heroeBorrdo!);  
    }
  }*/

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop();
  }
}
