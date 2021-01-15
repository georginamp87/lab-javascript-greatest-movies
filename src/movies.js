// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {
    let directorsArr=moviesArr.map((movie) => {
        return movie.director
    })    
    return directorsArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
    let moviesSteven = moviesArr.filter((elem) => {
         if (elem.director == "Steven Spielberg" && elem.genre.includes("Drama")) {
                return true }
              })
    return moviesSteven.length;
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr){

    if(moviesArr.length === 0){
        return 0
    } else {
      let totalRates = moviesArr.reduce((acc, elem) => {
            if (elem.rate !== undefined) {
                return acc + elem.rate }
            else {
                return acc }
    }, 0)     
    
    let avg = totalRates/moviesArr.length;
    return JSON.parse(avg.toFixed(2));
 } 
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
    let dramaMovies= moviesArr.filter(elem => elem.genre.includes("Drama")) 
    if (dramaMovies.length == 0) {
            return 0
        }
        let sum = dramaMovies.reduce((acc, elem) => {
        
        if (elem.rate) {
            return acc + elem.rate
        }
        else {
            return acc
        }}, 0)
            let avg = sum/dramaMovies.length;
            return parseFloat(avg.toFixed(2));
    }

    
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
        let cloneArr = JSON.parse(JSON.stringify(moviesArr))

        cloneArr.sort((a, b) => {
          if (a.year > b.year) {
             return 1; 
              } else if (a.year < b.year) {
                return -1;
              } else {
                  if (a.title > b.title) {
                      return 1; }
                      else if (a.title < b.title) {
                        return -1;}
                        else {
                            return 0;
                        }
                      }
                  })
          return cloneArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {

    let cloneArr = JSON.parse(JSON.stringify(moviesArr))
    cloneArr.sort((a, b) => {
        if (a.title > b.title) {
        return 1; }
        else if (a.title < b.title) {
          return -1;}
          else {
              return 0;
          }
        })
        let titles = cloneArr.map((singleMovie) => {
            return singleMovie.title
            })
    return titles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
    let cloneArr = JSON.parse(JSON.stringify(moviesArr))
    let formattedMovies = cloneArr.map(function(singleMovie){
        let duration = singleMovie.duration

        if (duration.includes(" ")) {
            let time = duration.split(" ")
            let hrArr = time[0].split("h")
            let hour = Number(hrArr[0])
            let minArr = time[1].split("min")
            let min = Number(minArr[0])
            singleMovie.duration = (hour * 60) + min;
        }
        else if (duration.includes("h")) {
            let hrArr = duration.split("h")
            let hour = Number(hrArr[0])
            singleMovie.duration = (hour * 60)
        }
        else {
            let minArr = duration.split ("min")
            let min = Number(minArr[0])
            singleMovie.duration = min

        }
        return singleMovie
    })
    return formattedMovies
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(moviesArr) {
    if (!moviesArr.length) {
        return null
    }
    let moviesByYear = {}
        moviesArr.forEach(function(singleMovie){
            if (singleMovie.year in moviesByYear) {
                moviesByYear[singleMovie.year].push(singleMovie)
            }
            else {
                moviesByYear[singleMovie.year] = []
                moviesByYear[singleMovie.year].push(singleMovie)
            }
        })
        let highestRating = 0
        let year = 0

        for (let currentYear in moviesByYear) {
            let average = ratesAverage(  moviesByYear[currentYear] )
            if (average > highestRating ) {
                highestRating = average
                year = currentYear
            }
        }
        return `The best year was ${year} with an average rate of ${highestRating}`
}
