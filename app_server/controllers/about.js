/* GET About View */
const about = (req, res) => {
    res.render('about', { title: 'About - Travlr Getaways', activeTab: {about: true}});
};

module.exports = {
    about
};