import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    // método implementado que é chamado assim que o componente é inicializado
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: '02/09/1999'
            },
            {
                id: 2,
                name: 'Angular HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'XPS-8796',
                duration: 80,
                rating: 4,
                releaseDate: '02/12/2000'
            },
            {
                id: 3,
                name: 'Angular The Voice',
                imageUrl: '',
                price: 30,
                code: 'XPS-87565',
                duration: 100,
                rating: 3,
                releaseDate: '02/12/2000'
            },
            {
                id: 2,
                name: 'Angular Notice',
                imageUrl: '',
                price: 28,
                code: 'XPS-8796',
                duration: 88,
                rating: 5.5,
                releaseDate: '02/12/2000'
            }
        ]
    }
}