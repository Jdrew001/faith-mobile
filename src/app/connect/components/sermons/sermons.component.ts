import { Component, OnInit, ViewChild, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
import { SermonService, FilterType } from './sermon.service';
import { Sermon, SermonData } from './sermons.model';
import * as moment from 'moment';
import { AudioPlayerService } from 'src/app/shared/services/audio-player.service';
import { PickerController, IonDatetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
})
export class SermonsComponent implements OnInit, AfterViewChecked {

  @ViewChild('datePicker', { static: false }) datePicker: IonDatetime;
  sermons: Sermon[] = [];
  currentPlaying: Sermon;
  tempSermons: Sermon[] = [];
  selectedFilters = {
    selectedCategories: [],
    selectedPreachers: []
  };
  dateFilter = {
    min: '', 
    max: '',
  };
  selectedDays = [1];
  preacherFilters = [];
  categoryFilters = [];
  selectedDate = null;

  constructor(
    private sermonService: SermonService,
    private audioPlayerService: AudioPlayerService,
    private pickerController: PickerController,
    public alertController: AlertController) { }

  ngOnInit() {
    
    this.fetchSermons(this.selectedDate);
    this.audioPlayerService.audioState$.subscribe(value => {
      if (!value) {
        this.currentPlaying = null;
        return;
      }
      this.currentPlaying = value;
    });
  }

  ngAfterViewChecked() {
    this.datePicker.dayValues = [1];
  }

  fetchSermons(date) {
    this.sermonService.fetchFilteredSermons(this.selectedFilters, date).subscribe(data => {
      this.sermons = data;
      this.tempSermons = data;
      this.preacherFilters = this.sermonService.retrieveFilters(FilterType.preachers, data);
      this.categoryFilters = this.sermonService.retrieveFilters(FilterType.categories, data);
      this.dateFilter = this.sermonService.retrieveDateFilter(data);
    });
  }

  convertToLocalDate(item) {
    return item.date ? moment(item.date).format('MM/DD/YY') : null;//test
  }

  playAudio(item) {
    this.currentPlaying = item;
    this.audioPlayerService.audioPlayer$.next({data: this.sermons, currentPlaying: item});
    this.audioPlayerService.audioState$.next(item);
  }

  stopAudio() {
    this.currentPlaying = null;
    this.audioPlayerService.audioPlayer$.next(null);
    this.audioPlayerService.audioState$.next(null);
  }

  checkForPlayer(item: Sermon) {
    return this.currentPlaying ? item.id === this.currentPlaying.id : false;
  }

  searchFilter(val) {
    this.sermons = this.tempSermons;
    this.sermons = this.sermons.filter(x => x.title.toLowerCase().includes(val.toLocaleLowerCase()));
  }

  isFilterSelected(name) {
    return this.selectedFilters.selectedPreachers.findIndex(x => x === name) === -1 ? false : true;
  }

  datePickerSelected(val) {
    if (!moment(this.selectedDate).isValid()) {
      const yearSelected = this.selectedDate.substring(0, 4);
      const monthSelected = this.selectedDate.substring(5, 7);
      let newDate = moment(`${yearSelected}-${monthSelected}-01`).toISOString();
      this.selectedDate = newDate;
    }

    this.fetchSermons(this.selectedDate);
  }

  async selectPreacher() {
    let obj = [];
    this.preacherFilters.forEach(val => {
      console.log(val);
      obj.push(
        {
          name: val,
          type: 'checkbox',
          label: val,
          value: val,
          checked: this.selectedFilters.selectedPreachers.findIndex(x => x === val) === -1 ? false : true
        }
      );
    });
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Preachers',
      inputs: obj,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: (val) => {
            this.selectedFilters.selectedPreachers = val;
            this.fetchSermons(this.selectedDate);
          }
        }
      ]
    });

    await alert.present();
  }

  async selectCategory() {
    let obj = [];
    this.categoryFilters.forEach(val => {
      obj.push(
        {
          name: val,
          type: 'checkbox',
          label: val,
          value: val,
          checked: this.selectedFilters.selectedCategories.findIndex(x => x === val) === -1 ? false : true
        }
      );
    });
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Categories',
      inputs: obj,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: (val) => {
            this.selectedFilters.selectedCategories = val;
            this.fetchSermons(this.selectedDate);
          }
        }
      ]
    });

    await alert.present();
  }

  clearSearch(val) {
    this.sermons = this.tempSermons;
  }

  clearFilters() {
    // TODO: Call service and clear the filter arrays
    this.selectedFilters.selectedCategories = [];
    this.selectedFilters.selectedPreachers = [];
    this.selectedDate = null;
    this.fetchSermons(this.selectedDate);
  }

  private retrieveIndex(item: Sermon) {
    return this.sermons.findIndex(x => x.id === item.id);
  }
}
