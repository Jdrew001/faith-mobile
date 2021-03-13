import { Injectable } from "@angular/core";
import * as moment from 'moment';

export enum Frequency {
    NONE = "NONE",
    MONTHLY = "MONTHLY",
    WEEKLY = "WEEKLY"
}

@Injectable()
export class DateUtils {
    
    // GET DATE RANGE 
    getDateRange(frequency: Frequency, startDate: string, endDate: string) {
        let result: Array<String>;
        switch(frequency) {
            case Frequency.MONTHLY:
                return this.getMonthlyDates(startDate, endDate);
            case Frequency.WEEKLY:
                return this.getWeeklyDates(startDate, endDate);
        }
    }

    private getMonthlyDates(start: string, end: string) {
        let startDate = moment(start);
        let endDate = moment(end);
        let weekNum = Math.ceil(startDate.date() / 7);
        let arr = [];

        let temp = startDate.clone().day(start);
        arr.push(temp.format('YYYY-MM-DD'));

        while(temp.isBefore(endDate.add(1))) {
            temp.add(7, 'days');

            let tempWeekNum = Math.ceil(temp.date() / 7);
            if (tempWeekNum == weekNum) {
                arr.push(temp.format('YYYY-MM-DD'));
            }
        }

        return arr;
    }

    private getWeeklyDates(start: string, end: string) {
        let startDate = moment(start);
        let endDate = moment(end);
        let arr = [];
        let temp = startDate.day(startDate.day());
        arr.push(temp.format('YYYY-MM-DD'));

        while(temp.isBefore(endDate)) {
            temp.add(7, 'days');
            arr.push(temp.format('YYYY-MM-DD'));
        }

        console.log('arr', arr);
        return arr;
    }
}