export class Movie {
    title: string;
    year: number;
    description: string;
    imageUrl: string;

    constructor(title: string, year: number) {
        this.title = title;
        this.year = year;
        this.description = '';
        this.imageUrl = '';
    }
}
