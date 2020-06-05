import { Component, OnInit, ViewChild, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
import { SermonService, FilterType } from './sermon.service';
import { Sermon, SermonData } from './sermons.model';
import * as moment from 'moment';
import { AudioPlayerService } from 'src/app/shared/services/audio-player.service';
import { PickerController, IonDatetime, IonSearchbar } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';
import { HelperService } from 'src/app/core/helper.service';
import { ConnectConstant } from '../../connect.constant';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0 }),
          stagger(75, [
            animate('0.250s cubic-bezier(0.10, 0, 0.25, .45)', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SermonsComponent implements OnInit, AfterViewChecked {

  @ViewChild('datePicker', { static: false }) datePicker: IonDatetime;
  @ViewChild('search', { static: false }) search: IonSearchbar;
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
  searchText = '';
  selectedDays = [1];
  preacherFilters = [];
  categoryFilters = [];
  selectedDate = null;

  constructor(
    private sermonService: SermonService,
    private audioPlayerService: AudioPlayerService,
    private pickerController: PickerController,
    public alertController: AlertController,
    private helperService: HelperService) { }

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
      this.dateFilter = this.sermonService.retrieveDateFilter(data) ? this.sermonService.retrieveDateFilter(data) : this.dateFilter;
    });
  }

  convertToLocalDate(item) {
    return item.date ? moment(item.date).format('MM/DD/YY') : null;
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
    if (this.selectedDate && !moment(this.selectedDate).isValid()) {
      const yearSelected = this.selectedDate.substring(0, 4);
      const monthSelected = this.selectedDate.substring(5, 7);
      let newDate = moment(`${yearSelected}-${monthSelected}-01`).toISOString();
      this.selectedDate = newDate;
    }
    this.fetchSermons(this.selectedDate);
    this.searchText = '';
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
      cssClass: 'alert-dialog',
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
            this.searchText = '';
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
      cssClass: 'alert-dialog',
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
            this.searchText = '';
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
    this.searchText = '';
  }

  getEmptyImage() {
    return this.helperService.getResourceUrl(ConnectConstant.EMPTY_SERMON_IMAGE, true); 
  }

  private retrieveIndex(item: Sermon) {
    return this.sermons.findIndex(x => x.id === item.id);
  }
}
