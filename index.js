 const fs = require("fs")

 const dbConnection = require("./db/db.connection")

 const restroModel = require("./model/restroModel")
// const { error } = require("console")

 const jsonData = fs.readFileSync("./data/restroData.json","utf-8")

 const restroInfo = JSON.parse(jsonData)

 const seedData = async()=>{
    try {
        for(const restroData of restroInfo) {
            const newRestro = new restroModel(restroData)

            await newRestro.save()
            console.log("Data saved successfully")
        }

    } catch (err) {
        console.log("Error loading data",err)
    }
 }

 const newRestaurant1 = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
};


const newRestaurant2 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};

const addRestro = async(newRestro)=>{
    await dbConnection()
    try {
        const savedRestro = new restroModel(newRestro)
        await savedRestro.save()
        console.log("new restraunt data saved successfully ")

    } catch(err) {
        console.log("Error loading data ",err)
    }

}

const allRestro = async()=>{
    await dbConnection()
    try {
        const restroData = await restroModel.find()
    console.log("All restraunts data is :",restroData)

    } catch(err) {
        console.log("Error showing data",err)
    }
}

const findRestroByName = async(restraunt)=>{
    await dbConnection()

    try {
        const foundRestro = await restroModel.find({name:restraunt})
        console.log("Restraunt data found successfully",foundRestro)

    } catch(err){
        console.log("Error loadiing data",err)
    }
}

const offersReservations = async() => {
    await dbConnection()
    try {
        const offersResev = await restroModel.find({reservationsNeeded:true})
        console.log("Restraunt which needs Reservations",offersResev)

    } catch (err) {
        console.log("Error loading reservation data",err)
    }
}

const offersDelivery = async() => {
    await dbConnection()

    try {
        const ifDeliverable = await restroModel.find({isDeliveryAvailable:true})
        console.log("If order Delivery is Possible:",ifDeliverable)

    } catch(err) {
        console.log("Error loading data",err)
    }
}


const foundNumber = async(mobileNumber)=> {
    await dbConnection()
    
    try {
        const restro = await restroModel.find({phoneNumber:mobileNumber})
        console.log(`Found restraunt with mobile number ${mobileNumber} : `,restro)

    } catch {
        console.log(`Error finding restraunt with mobile number ${mobileNumber}`)
    }
    
}

const restroWithCuisine = async(dish)=>{
    await dbConnection()
    try {
        const foundDish = await restroModel.find({cuisine:dish})
        console.log(`Restraunts with cuisine ${dish} : `,foundDish)

    } catch {
        console.log(`Error loading ${dish} dish data`)
    }
}

// Solution 1

addRestro(newRestaurant1)

// Solution 2

addRestro(newRestaurant2)

// Solution 3

allRestro()

// Solution 4

findRestroByName("Yo China")


// Solution 5

// offersReservations()

// Solution 6

offersDelivery()

// Solution 7

foundNumber("+91-9123456780")


// Solution 8

restroWithCuisine('Continental')






//  dbConnection()

//  seedData()