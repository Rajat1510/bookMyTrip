const express =require('express')

const app = express()

app.set('view engine','hbs')

app.use(express.json());

app.use(express.urlencoded({extended:true}))


app.use('/',express.static(__dirname + '/public_static'))

app.use('/',require('./routes/index_js/index'));
app.use('/bus',require('./routes/bus_js/bus'));
app.use('/cars',require('./routes/car_js/cars'));
app.use('/hotel',require('./routes/hotel_js/hotel'));
app.use('/flights',require('./routes/flight_js/flights'));
app.use('/Login',require('./routes/login_js/login'));
app.use('/SignUp',require('./routes/signup_js/signup'));
app.use('/trains',require('./routes/train_js/trains'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App is running on port " + port);
});


