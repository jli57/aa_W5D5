
class Clock {
  constructor() {
    let date = new Date(Date.now());
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    
    this.printTime();
  
    setInterval(() => this._tick(), 1000);

    
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    if (this.seconds === 59){
      if (this.minutes === 59){
        if (this.hours === 23){
          this.hours = 0;
        } else {
          this.hours += 1;
        }
        this.minutes = 0;
      } else {
        this.minutes += 1;
      }
      this.seconds = 0;
    } else {
      this.seconds += 1;
    }
    
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();