import { Component } from '@angular/core';

@Component({
  //Es el nom del component
  selector: 'app-root',

  //Vincular el ts amb el html al que esta fent referncia
  templateUrl: 'app.component.html'

  //Aqui al contrari que el templateURL pot afegir el codi html directament
  //template: '<span>hola bona tarda</span>'
})
export class AppComponent {
}
