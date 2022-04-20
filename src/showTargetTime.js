export default class showTargetTime {
    constructor(root){
        root.innerHTML = showTargetTime.getHTML();

        this.el = {
            hours: root.querySelector(".tDatePartHours"),
            minutes: root.querySelector(".tDatePartMinutes"),
            seconds: root.querySelector(".tDatePartSeconds")
        }

        this.interval = null;

        setInterval(() => { this.updateInterfaceTime(), 1000 });
    }

    updateInterfaceTime(){
        const hours = new Date().getHours() + 2 % 24;
        const minutes = 0;
        const seconds = 0;

        this.el.hours.textContent = hours.toString().padStart(2, "0");
        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    static getHTML(){
        return `
        <span class="tDatePart">Bis </span><span class="tDatePart tDatePartHours">00</span><span class="tDatePart">:</span><span class="tDatePart tDatePartMinutes">00</span><span class="tDatePart">:</span><span class="tDatePart tDatePartSeconds">00</span>
        `;
    }
}