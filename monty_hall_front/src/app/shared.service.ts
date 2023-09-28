import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIUrl } from 'src/constants/constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    constructor(private http: HttpClient) { }

    runSimulation(data: object) {
        return this.http.post(APIUrl + '/simulation', data);
    }
    
    // private source_wins = new BehaviorSubject<number>(0);
    // private source_losses = new BehaviorSubject<number>(0);

    // currentWins = this.source_wins.asObservable();
    // currentLosses = this.source_losses.asObservable();

    // changeWins(wins: number) {
    //     this.source_wins.next(wins);
    // }
    // changeLosses(losses: number) {
    //     this.source_losses.next(losses);
    // }

    private source_array = new BehaviorSubject<Array<number>>([0, 0]);

    currentArray = this.source_array.asObservable();

    changeArray(array: Array<number>) {
        this.source_array.next(array);
    }
}
