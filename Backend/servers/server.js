const express = require('express');
const connectDB = require('../config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('../api/auth');
const app = express();

connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(cors());


app.use('/',router);

const PORT =  8000;
app.listen(PORT,() => console.log(`server started on port ${PORT}`));

// AuctionPORT = 8001;
// AuctionServer.listen(AuctionPORT, () => {
//   console.log(`Auction Server is Runnig at port ${AuctionPORT}`);
// });