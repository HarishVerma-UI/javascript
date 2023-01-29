//Difference beetween of and from 
//From : the from emait an array value one by one  
//from(['orange','apple','banana']).subscribe(console.log) // 'orange','apple','banana'
//of emit a all value at one time  
//from(['orange','apple','banana']).subscribe(console.log) // ['orange','apple','banana']


//diffrence beetween map and mergeMap 
//For each value that the Observal emits you can modify using map funcrion 
//MergeMap : MergeMap oprator use to merge the all stream into single strim 
//https://luukgruijs.medium.com/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff#:~:text=Use%20mergeMap%20if%20you%20simply,order%20is%20important%20to%20you.
getData = (val)=>{return of(`test ${val}`).pipe(
    delay(1000)
  ) }

from([1,2,3,4]).pipe(
  mergeMap(param => getData(param))
).subscribe(val => console.log(val));

// test 1
// test 2
// test 3
// test 4

//switchMap : return the last emit value  
from([1,2,3,4]).pipe(
    switchMap(param => getData(param))
  ).subscribe(val => console.log(val));
//test 4

//concatMap : it's suscribe one by one  
//concatMap will not subscribe to the next Observable until the current one completes

//The take, takeUntil, takeWhile & takeLast operators allow us to filter out the emitted values from the observable. The take(n) emits the first n values, while takeLast(n) emits the last n values. The takeUntil(notifier) keeps emitting the values until it is notified to stop.


//what is subject and how to create and how many types of subject
// A Subject is like an Observable, but can multicast to many Observers.
//Subjects are like EventEmitters: they maintain a registry of many listeners.

//