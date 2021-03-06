import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.sass']
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  // subscribe to the trigger we emit from the training service
  trainingSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {

    this.trainingSubscription = this.trainingService.trainingChanged.subscribe(
      training => {
        training ? this.ongoingTraining = true : this.ongoingTraining = false;
      }
    );
  }

  ngOnDestroy() {
    if (this.trainingService) this.trainingSubscription.unsubscribe()
  }

}
