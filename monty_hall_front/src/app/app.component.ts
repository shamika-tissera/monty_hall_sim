import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { VisualComponent } from './visual/visual.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: SharedService, private toastr: ToastrService, private dialogRef: MatDialog, private data: SharedService) {}

  title = 'Monty Hall Simulator';
  numberOfSimulations: number = 0;
  changeDoor: boolean = false;
  numberOfWins: number = 0;
  numberOfLosses: number = 0;

  currentWins: number = 0;
  currentLosses: number = 0;

  isLoading: boolean = false;


  ngOnInit(): void {
    // subscribe to the behaviour subject
    // this.data.currentWins.subscribe(wins => this.currentWins = wins);
    // this.data.currentLosses.subscribe(losses => this.currentLosses = losses);

    this.data.currentArray.subscribe(array => {
      this.currentWins = array[0];
      this.currentLosses = array[1];
    }
    );

  }

  openDialog() {
    this.dialogRef.open(ModalComponent);
  }

  runSimulations() {
    if (this.numberOfSimulations <= 0) {
      // 0 or less than 0 is not a valid number of simulations
      this.toastr.error('Please enter a number greater than 0!');
    }
    else if (this.numberOfSimulations > 2147483647) {
      // 2147483647 is the maximum value for an integer in JavaScript
      this.toastr.error('Please enter a number less than 2147483647!');
    }
    else {
      let data = {
        numberOfSimulations: this.numberOfSimulations,
        changeDoor: this.changeDoor,
      };
      this.isLoading = true;

      this.service.runSimulation(data).subscribe(
        (res: any) => {
          this.numberOfWins = res.wins;
          this.numberOfLosses = res.losses;
          this.isLoading = false;

          // update the behaviour subject
          this.data.changeArray([this.numberOfWins, this.numberOfLosses]);
        },
        (error) => {
          console.error(error);
          this.isLoading = false;
          this.toastr.error('Something went wrong!');
        }
      );
    }
  }
}
