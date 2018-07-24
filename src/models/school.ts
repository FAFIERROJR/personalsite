import { Coursework } from "./coursework";

export class School{
    key: string
    name: string
    startYear: number
    endYear: number
    imgUrl: string
    honors: string[]
    gpa: number
    notable_coursework: {[key: string]: Coursework}

    /**
     * School Model
     * Record of attended school
     * @param name          the school's name
     * @param begin_year    the first year of attendance
     * @param end_year      the last year of attendance
     * @param img_url       the url of the school's card img stored in firestore
     */
    
    constructor(name: string, begin_year: number, end_year: number, img_url: string = ''){
        this.name = name
        this.startYear = begin_year
        this.endYear = end_year
        this.imgUrl = img_url
    }
}