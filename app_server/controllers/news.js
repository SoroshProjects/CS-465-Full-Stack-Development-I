/* GET News View */
const news = (req, res) => {
    res.render('news', { title: 'News - Travlr Getaways', activeTab: {news: true}});
};

module.exports = {
    news
};