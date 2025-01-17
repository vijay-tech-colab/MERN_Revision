const Home = require('../model/Home');


exports.getAddHome = (req, res) => {
    // res.sendFile(path.join(rootDir, "views", "add-home.html"));
    res.render('add-home', { pageTitle: 'Add Home' });
}



exports.postAddHome = (req, res) => {
    // res.sendFile(path.join(rootDir, "views", "home-added.html"));
    // const houseName = req.body.houseName;
    // const price = req.body.price;
    // const location = req.body.location;
    // const rating = req.body.rating;
    // const photoUrl = req.body.photoUrl;

    const {houseName,price,location,rating,photoUrl} = req.body;

    const home  = new Home(houseName,price,location,rating,photoUrl);

    home.save(error => {
        if(error){
            console.log("Error while saving data ",error);
            res.redirect('/500');
        }
        res.render('home-added', { pageTitle: 'Home Added' });
    });
}

