import { Component } from '@angular/core';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./game.component.scss'],
})
export class VisualComponent {
  noOfSimulations = 0;
  isChangeDoor = false;
  images: Array<{ src: string }> = [];
  doors: Array<{
    id: number;
    imageURL: string;
    selected: boolean;
    opened: boolean;
    isPrize: boolean;
  }> = [];
  wins = 0;
  losses = 0;

  // simulate a round
  simulate(round: number) {
    // reset doors in each round
    this.doors = [
      {
        id: 0,
        imageURL: '../../assets/goat.png',
        selected: false,
        opened: false,
        isPrize: false,
      },
      {
        id: 1,
        imageURL: '../../assets/goat.png',
        selected: false,
        opened: false,
        isPrize: false,
      },
      {
        id: 2,
        imageURL: '../../assets/goat.png',
        selected: false,
        opened: false,
        isPrize: false,
      },
    ];

    // randomly select a door for the prize
    let prizeDoor = Math.floor(Math.random() * 3);
    this.doors[prizeDoor].imageURL = '../../assets/car.png';
    this.doors[prizeDoor].isPrize = true;

    // randomly select a door for the player
    let selectedDoor = Math.floor(Math.random() * 3);
    this.doors[selectedDoor].selected = true;

    // open a door that is not selected and not prize
    let openedDoor = this.doors.findIndex((element) => {
      return element.selected == false && element.isPrize == false;
    });
    this.doors[openedDoor].opened = true;

    // change the selected door if the player wants to change
    if (this.isChangeDoor) {
      let finalDoor = this.doors.findIndex((element) => {
        return element.selected == false && element.opened == false;
      });
      this.doors[selectedDoor].selected = false;
      this.doors[finalDoor].selected = true;
      selectedDoor = finalDoor;
    }

    // check if the player won or lost
    if (this.doors[selectedDoor].isPrize) {
      this.wins++;
    } else {
      this.losses++;
    }

    // open all doors
    for (let i = 0; i < this.doors.length; i++) {
      this.doors[i].opened = true;
    }
  }

  // start the simulation
  onStart() {
    // reset wins and losses
    this.wins = 0;
    this.losses = 0;

    // simulate each round
    for (let i = 0; i < 3; i++) {
      // simulate each round after 500ms
      setTimeout(() => {
        this.simulate(i);
      }, 500 * i);
    }
  }
}
