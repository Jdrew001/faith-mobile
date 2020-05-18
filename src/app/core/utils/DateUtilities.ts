export class DateUtils {

    currentYear = new Date().getFullYear();
    currentMonth = new Date().getMonth();
    private monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    private months = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    }

    retrieveMonthAndYear() {
        let data = [];
        const prevDate = `${this.months[this.currentMonth] === -1 ? this.previousYearAndMonth() : this.months[this.currentMonth - 1]} ${this.months[this.currentMonth] === -1 ? this.previousYearAndMonth() : this.currentYear}`
        const currentDate = `${this.months[this.currentMonth]} ${this.currentYear}`

        data.push(prevDate);
        data.push(currentDate);
        return data;        
    }

    previousYearAndMonth() {
        return {month: this.months[11], year: this.currentYear - 1}
    }
}