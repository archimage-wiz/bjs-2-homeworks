class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        let [hour, min] = time.split(":");
        if (
            !Number.isInteger(Number.parseInt(hour)) ||
            !Number.isInteger(Number.parseInt(min)) ||
            !callback
        ) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        if (this.alarmCollection.find((el) => el.time === time)) {
            console.warn("Уже присутствует звонок на это же время");
        }
        this.alarmCollection.push({
            callback,
            time,
            canCall: true,
        });
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(
            (el) => el.time !== time
        );
    }
    getCurrentFormattedTime() {
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let strHour = hour > 9 ? String(hour) : `0${hour}`;
        let strMin = min > 9 ? String(min) : `0${min}`;
        return `${strHour}:${strMin}`;
    }
    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((el) => {
                if (el.time === this.getCurrentFormattedTime() && el.canCall) {
                    el.canCall = false;
                    el.callback();
                }
            });
        });
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach((el) => {
            el.canCall = true;
        });
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
