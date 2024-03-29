// used in london.html

var london = {
    name: 'London',
    population: 8308369,
    tallestBuilding: {
       name:  'Shard',
       height: '310m'
    },
    numberOfUniversities: 43,
    averageRent: 1106,
    dailyTubePassengerJourney: 3500000,
    olympics: [ 1908, 1948, 2012],
    updatePopulation: function(newPopulation) {
      this.population = newPopulation;
    }
  };

function listDomElements() {
    var children = document.body.childNodes;
    var i;
  
    for (i = 0; i <  children.length; i = i + 1) {
      console.log(children[i]);
    }
  }

  function displayPopulation() {
    // Make a new <p></p> for population. This is not attached to the DOM yet.
    var population = document.createElement('p');
  
    // Make some text content to put into your <p></p>
    var content = document.createTextNode('Population: ' + london.population);
  
    // Put the text content into the <p></p>.
    population.appendChild(content);
  
    // Finally the population can be appended to the body, and will become visible in the browser.
    document.body.appendChild(population);
  }

  function displayTallestBuilding() {
      var content = document.createTextNode('Tallest Building: ' + london.tallestBuilding.name);
      displayInformation(content);
  } 

  function displayNumberOfUniversites() {
      var content = document.createTextNode('Number of Universities: ' + london.numberOfUniversities);
      displayInformation(content);
  }

  function displayInformation(content) {
      var infoToDisplay = document.createElement('p');
      infoToDisplay.appendChild(content);
      document.body.appendChild(infoToDisplay);
  }

//   function showInformation() {
//     var text = "";
//     if (navigator.cookieEnabled == true) {
//       text = "cookies are enabled.";
//     } else {
//       text = "cookies are not enabled."
//     }
//     document.getElementById("demo").innerHTML = "text";
//   }

  //refactor to use for loop to go through each part of the object