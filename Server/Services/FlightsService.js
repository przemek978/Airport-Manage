import fs from "fs";

class FlightsService {

    constructor(app) {

        const PATH = './Storage/flights.json'

        const getLastId = (flightsJson) => {
            var maxId = 0;
            var flights = JSON.parse(flightsJson);
            for (let i = 0; i < flights.length; i++) {
                if (flights[i].id >= maxId)
                    maxId = flights[i].roomId;
            }

            return maxId;
        }

        app.get('/flights', (req, res) => {
            fs.readFile(PATH, 'utf8', (err, flightsJson) => {
                if (err) {
                    console.log("File read failed in GET /room"+" : "+ err);
                    res.status(500).send('File read failed');
                    return;
                }
                console.log("GET: /flights");
                res.send(flightsJson);
            });
        });

        app.get('/room/:id/details', (req, res) => {
            fs.readFile(PATH, 'utf8', (err, flightsJson) => {
                if (err) {
                    console.log("File read failed in GET /room/" + req.params.id + "/details" + " : "+ err);
                    res.status(500).send('File read failed');
                    return;
                }
                var flights = JSON.parse(flightsJson);
                var room = flights.find(roomtmp => roomtmp.roomId == req.params.id);
                if (!room) {
                    console.log("Can't find room with id: " + req.params.id);
                    res.status(500).send('Cant find room with id: ' + req.params.id);
                    return;
                }
                var roomJSON = JSON.stringify(room);
                console.log("GET /flights/"  + req.params.id + "/details");
                res.send(roomJSON);
            });
        });

        app.get('/room/:id', (req, res) => {
            fs.readFile(PATH, 'utf8', (err, flightsJson) => {
                if (err) {
                    console.log("File read failed in GET /room/" + req.params.id + " : "+ err);
                    res.status(500).send('File read failed');
                    return;
                }
                var flights = JSON.parse(flightsJson);
                var room = flights.find(roomtmp => roomtmp.roomId == req.params.id);
                if (!room) {
                    console.log("Can't find room with id: " + req.params.id);
                    res.status(500).send('Cant find room with id: ' + req.params.id);
                    return;
                }
                var roomJSON = JSON.stringify(room);
                console.log("GET /flights/" + req.params.id);
                res.send(roomJSON);
            });
        });




        app.get('/date/:date', (req, res) => {
            fs.readFile(PATH, 'utf8', (err, flightsJson) => {
                if (err) {
                    console.log("File read failed in GET /room/" + req.params.date + " : "+ err);
                    res.status(500).send('File read failed');
                    return;
                }
                var flights = JSON.parse(flightsJson);
                var room = flights.filter(roomtmp => roomtmp.date == req.params.date);
                if (!room) {
                    console.log("Can't find room with id: " + req.params.id);
                    res.status(500).send('Cant find room with id: ' + req.params.date);
                    return;
                }
                var roomJSON = JSON.stringify(room);
                console.log("GET /flights/" + req.params.date);
                res.send(roomJSON);
            });
        });

        app.post('/room', (req, res) => {
            fs.readFile(PATH, 'utf8', (err, flightsJson) => {
                if (err) {
                    console.log("File read failed in POST /room"+" : "+ err);
                    res.status(500).send('File read failed');
                    return;
                }
                var flights = JSON.parse(flightsJson);
                var id = getLastId(flightsJson);
                id = parseInt(id) + 1;
                if (id) {
                    req.body.roomId = id.toString();
                    flights.push(req.body);
                    var newList = JSON.stringify(flights);
                    fs.writeFile(PATH, newList, err => {
                        if (err) {
                            console.log('Error writing file in POST /room', err);
                            res.status(500).send('Error writing file flights.json');
                        } else {
                            res.status(201).send(req.body);
                            console.log('Successfully wrote file flights.json and added new room with id = ' + req.body.roomId);
                        }
                    });
                } else {
                    console.log("File read failed in POST /room", err);
                    res.status(500).send('File read failed');
                    return;
                }
            });
        });

        app.put('/room/:id', (req, res) => {
            fs.readFile(PATH, 'utf8', (err, flightsJson) => {
                if (err) {
                    console.log("File read failed in PUT /room/" + req.params.id+" : "+ err);
                    res.status(500).send('File read failed');
                    return;
                }
                var flights = JSON.parse(flightsJson);
                var roomBody = flights.find(roomtmp => roomtmp.roomId == req.body.roomId);
                if (roomBody && roomBody.roomId != req.params.id) {
                    console.log("room by id = " + roomBody.roomId + " already exists");
                    res.status(500).send('room by id = ' + roomBody.roomId + ' already exists');
                    return;
                }
                var room = flights.find(roomtmp => roomtmp.roomId == req.params.id);
                var id = getLastId(flightsJson);

                if (!room) {
                    id = id + 1;
                    req.body.roomId = id;
                    flights.push(req.body);
                    var newList = JSON.stringify(flights);
                    fs.writeFile(PATH, newList, err => {
                        if (err) {
                            console.log('Error writing file in PUT /room/' + req.params.id+" : "+ err);
                            res.status(500).send('Error writing file flights.json');
                        } else {
                            res.status(201).send(req.body);
                            console.log('Successfully wrote file flights.json and added new room with id = ' + req.body.roomId);
                        }
                    });
                } else {
                    for (var i = 0; i < flights.length; i++) {
                        if (flights[i].roomId == room.roomId) {
                            flights[i] = req.body;
                        }
                    }
                    var newList = JSON.stringify(flights);
                    fs.writeFile(PATH, newList, err => {
                        if (err) {
                            console.log('Error writing file in PUT /room/' + req.params.id, err);
                            res.status(500).send('Error writing file flights.json');
                        } else {
                            res.status(200).send(req.body);
                            console.log('Successfully wrote file flights.json and edit room with old id = ' + req.params.id);
                        }
                    });
                }
            });
        });

        app.delete('/room/:id', (req, res) => {
            fs.readFile(PATH, 'utf8', (err, flightsJson) => {
                if (err) {
                    console.log("File read failed in DELETE /room" +" : "+ err);
                    res.status(500).send('File read failed');
                    return;
                }
                var flights = JSON.parse(flightsJson);
                var roomIndex = flights.findIndex(roomtmp => roomtmp.roomId == req.params.id);

                if (roomIndex != -1) {
                    flights.splice(roomIndex, 1);
                    var newList = JSON.stringify(flights);

                    fs.writeFile(PATH, newList, err => {
                        if (err) {
                            console.log('Error writing file in DELETE /room/' + req.params.id, err);
                            res.status(500).send('Error writing file flights.json');
                        } else {
                            res.status(204).send();
                            console.log('Successfully deleted room with id = ' + req.params.id);
                        }
                    });
                } else {
                    console.log("room by id = " + req.params.id + " does not exists");
                    res.status(500).send('room by id = ' + req.params.id + ' does not exists');
                    return;
                }
            });
        });
    }

    // add (){
    //
    // }
    //
    // edit (){
    //
    // }
    //
    // delete(){
    //
    // }
    //
    // getAll() {
    //
    // }
    //
    // getDetails(){
    //
    // }
    //
    // getLastId(){
    //
    // }
}

export default flightsService
