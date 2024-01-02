const mongoose = require('mongoose');
require('dotenv').config();


const connectToDB = async () => {
  try {
    const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.wbvi7g9.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(
      MONGO_URI,
      {
        dbName: 'shtor'
      }
    );
    console.log('Connected to MongoDB');

    // await Product.insertMany(allProducts)
    // const newBracelet = new BraceletProduct({
    //   name: {
    //     ua: "Браслет-підвіс",
    //     en: "Bracelet-pendant"
    //   },
    //   description: {
    //     ua: "Дерево. В комплекті вощений шнур 1 мм чорного кольору. Ручна робота, кожен виріб унікальний.",
    //     en: "Wood. Black waxed cord included. Handcrafted. Each piece is unique. Wood."
    //   },
    //   price: {
    //     ua: 4500,
    //     en: 125
    //   },
    //   group: "OBJECT",
    //   colors: [
    //     "658e866baab7d8c3781442c3",
    //     "658e8678aab7d8c3781442c5",
    //     "658e8681aab7d8c3781442c7"
    //   ],
    //   variations: [{
    //     size: "21,5",
    //     image: "658e8cf6aab7d8c3781442e0",
    //   },{
    //     size: "22",
    //     image: '658e8cfeaab7d8c3781442e2',
    //   },{
    //     size: "23,4",
    //     image: '658e8d05aab7d8c3781442e4',
    //   }]
    // });
    // newBracelet.save()
    //     .then((savedBracelet) => {
    //       console.log('Bracelet saved:', savedBracelet);
    //     })
    //     .catch((error) => {
    //       console.error('Error saving bracelet:', error);
    //     })
    //     .finally(() => {
    //       // Close the connection after saving
    //       mongoose.connection.close();
    //     });
    return mongoose.connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

module.exports = connectToDB;
