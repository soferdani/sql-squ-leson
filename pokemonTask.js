const Sequelize = require('sequelize')   
const sequelize = new Sequelize('mysql://root:@localhost/pokemon')

const data = require('./raw-pokemon-trainer-json/poke_data.json')

//q1

const bainPokeToTrain = async function (data) { //this is DONE
    for (let i of data) {
        let pokeId = i.id
        for (let t of i.ownedBy) {
            let trainerName = t.name
            let query = `insert into pokemon_trainer values (${pokeId},(select id from trainer where name = "${trainerName}"));`
            let result = await sequelize.query(query)
            console.log(result)
        }
    }
}


const addPokemon = async function (data) { //this is DONE!
    for (let i in data) {
        let query = `insert into pokemon (id,name,type,height,weight) 
        values (${data[i].id},'${data[i].name}',(select id from pokemon_type where name = '${data[i].type}'),${data[i].height},${data[i].weight});`
        let result = await sequelize.query(query)
        console.log(result);
    }
}

const addTrainer = async function (date) { //this is DONE 
    let trainer = []
    let townMap = {
        'Cerulean City': 1,
        'Little Italy': 2,
        'Pewter City': 3,
        'Pallet Town': 4,
        'Zedon':5
    }
    data.forEach(t => {
        t.ownedBy.forEach(i => {
            if (!trainer.includes(i.name)) {
                trainer.push(i.name)
                let query = `insert into trainer (name,town) values ('${i.name}',${townMap[`${i.town}`]});`
                sequelize.query(query)
            }
            //no need asinc req here cuz i dont need to do nothing after
        })
    })
}

const addTrainerTown = async function (date) { //this is DONE 
    let trainerTown = []
    let newTown = ''
    data.forEach(t => {
        t.ownedBy.forEach(i => {
            if (!trainerTown.includes(i.town)) {
                trainerTown.push(i.town)
            }
        })
    })
    trainerTown.forEach(t => {
        newTown += `('${t}'),`
    })
    newTown = newTown.slice(0,-1)
    let query = `insert into town (name) values ${newTown};`
    let result = await sequelize.query(query)
    return result [0]

}


const addPokeType = async function (data) { //this is DONE !!!
    let pokeType = []
    let newType = ''
    data.forEach(t => {
        if (!pokeType.includes(t.type)) {
            pokeType.push(t.type)
        }
    })
    pokeType.forEach(t => {
        newType += `('${t[i]}'),`
    }) 
    newType = newType.slice(0,-1)
    let query = `insert into pokemon_type (name) values ${newType};`
    let result = await sequelize.query(query)
    return result [0]
}


//q2
const heavyPoke = async function () {
    let query = 'select max(weight), name from pokemon;'
    let result = await sequelize.query(query)
    
    console.log(`the heaviest pokemon is  -  ${result[0][0].name}`);

}

//q3 

const pokemonType = async function (type) {
    let query = `select p.name 
    from pokemon as p join pokemon_type as t 
    on p.type = t.id 
    where t.name = "${type}";`
    let result = await sequelize.query(query)
    let toPrint = `the ${type} pokemons: `
    for (let i of result[0]) {
        toPrint+= `${i.name},`
    }
    toPrint = toPrint.slice(0,-1)
    console.log(toPrint);
}

//q4

const findOwners = async function (owner) {

}

findOwners("gengar")
