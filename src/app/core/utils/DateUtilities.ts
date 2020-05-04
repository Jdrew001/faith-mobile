export class DateUtils {

    private monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];

    retrieveMonthAndYear(limit) {
        let data = [];
        let startingYear = new Date().getFullYear();
        while(startingYear <= limit) {
            for (let i = 0; i < this.monthNames.length; i++) {
                data.push({date: `${this.monthNames[i]} ${startingYear}`, active: (i === new Date().getMonth() && startingYear === new Date().getFullYear())});
            }
            startingYear++;
        }

        return data;        
    }
}