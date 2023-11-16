const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const blogRoutes = require('./routes/blogRoutes');
const proCategoryRoutes = require('./routes/prodCategoryRoutes');
const blogCategoryRoutes = require('./routes/blogCategoryRoutes');
const brandRoutes = require('./routes/brandRoutes');
const couponRoutes = require('./routes/couponRoutes');
// const uploadRouter = require("./routes/uploadRoutes");

//connect to DB
const dbConnect = require('./config/dbConnect');
dbConnect();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/prodCategory', proCategoryRoutes);
app.use('/api/blogCategory', blogCategoryRoutes);
app.use('/api/brand', brandRoutes);
app.use('/api/coupon', couponRoutes);
// app.use('/api/upload', uploadRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});