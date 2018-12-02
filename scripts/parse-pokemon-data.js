const fs = require('fs');

const pathToCsv = './data/csv/pokemon.csv';
const csv = require('csvtojson');


csv().fromFile(pathToCsv).subscribe((resultRow) => {
    var name = resultRow.identifier;
    delete resultRow.identifier;
    resultRow.name = name;
    if (resultRow.species_id === 808) {
      resultRow.sprites = {
        normal: 'https://img.pokemondb.net/sprites/sun-moon/icon/meltan.png'
      };
    } else if (resultRow.species_id === 809) {
      resultRow.sprites = {
        normal: 'https://img.pokemondb.net/sprites/sun-moon/icon/melmetal.png'
      };
    } else if (resultRow.species_id < 722) {
        resultRow.sprites = {
            normal: 'http://img.pokemondb.net/sprites/x-y/normal/' + name + '.png'
        };
    } else if (resultRow.species_id < 803) {
        resultRow.sprites = {
            normal: 'http://img.pokemondb.net/sprites/sun-moon/normal/' + name + '.png'
        };
    } else {
      resultRow.sprites = {
          normal: 'http://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/' + name + '.png'
      };
    }
})
.then(obj => {
    console.log('Writing pokemon data...');
    return new Promise((resolve, reject) => {
        fs.writeFile('./lib/pokemon.json', JSON.stringify(obj), (error) => {
            if (error) {
                reject(error);
            } else {
                resolve('File created');
            }
        })
    });
})
.then(result => {
    return console.log(result);
})
.catch(error => {
    return console.error(error);
})
