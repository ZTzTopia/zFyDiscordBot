let dateFormat = require('dateformat');

module.exports = {
    timespan : function(before, after){
        if (typeof before === 'number')
            before = new Date(before);

        if (typeof after === 'number')
            after = new Date(after);

        let diff = after.getTime() - before.getTime();

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -=  days * (1000 * 60 * 60 * 24);

        let hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);

        let mins = Math.floor(diff / (1000 * 60));

        if (days >= 1)
            return days + 'd';
        if (hours >= 1)
            return hours + 'h';

        return mins + 'm';
    },

    remaining : function(before, after){
        if (typeof before === 'number')
            before = new Date(before);

        if (typeof after === 'number')
            after = new Date(after);

        let diff = after.getTime() - before.getTime();

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -=  days * (1000 * 60 * 60 * 24);

        let hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);

        let mins = Math.floor(diff / (1000 * 60));
        diff -= mins * (1000 * 60);

        let secs = Math.floor(diff / (1000));

        let string = '';

        if (days > 1)
            string += days + ' Days ';

        if (hours > 1)
            string += hours + ' Hours ';

        if (mins > 1)
            string += mins + ' Minutes ';

        if (secs > 1)
            string += secs + ' Seconds ';

        if (days < 1 && mins < 1 && mins < 1 && secs < 1)
            string = '';

        return string;
    },

    timePlusMinutesAsDate : function(datetime, minutes){
        if (typeof datetime === 'number')
            datetime = new Date(datetime);

        return new Date(datetime.getTime() + minutes * 1000);
    },

 
};
