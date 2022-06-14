import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star', 
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    // Torna a variável elegível para receber informação de componente externo
    // ou seja, vira o atributo da tag app-star
    @Input()
    rating: number = 0;

    starWidth: number = 0;

    // Instalar o font-awesome que possui recurso das estrelinhas de avaliações (rating): npm install font-awesome
    ngOnChanges(changes: SimpleChanges): void {
        // com a fonte awesome, pode funcionar esse cálculo com  94/5 ou 74/5
        this.starWidth = this.rating * 74 / 5;
    }

}