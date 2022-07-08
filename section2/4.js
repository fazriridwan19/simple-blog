/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
 function result() {
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateNow = new Date(Date.now());
    const backDays4 = new Date(dateNow - 345600000);
    return DAYS[backDays4.getDay()];
}
  
  console.log(result());