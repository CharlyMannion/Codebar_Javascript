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

  
