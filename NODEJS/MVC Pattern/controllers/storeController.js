const Home = require('../model/Home')
exports.getHome = (req, res, next) => {
    // console.log("home page",registeredHomes);
    Home.fetchAll(registeredHomes => {
        res.render('index', { pageTitle: 'Home', homes : registeredHomes });
    });
}
