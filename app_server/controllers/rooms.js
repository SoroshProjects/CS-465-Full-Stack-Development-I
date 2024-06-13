/* GET Rooms View */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms - Travlr Getaways', activeTab: {rooms: true}});
};

module.exports = {
    rooms
};