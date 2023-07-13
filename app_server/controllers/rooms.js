const fs = require('fs');
const room = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET Rooms View */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms - Travlr Getaways', room, activeTab: {rooms: true}});
};

module.exports = {
    rooms
};