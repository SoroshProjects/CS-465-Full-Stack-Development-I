/* GET Contact View */
const contact = (req, res) => {
    res.render('contact', { title: 'Contact - Travlr Getaways', activeTab: {contact: true}});
};

module.exports = {
    contact
};