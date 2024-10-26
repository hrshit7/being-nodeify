const {MongoClient} = require("mongodb");

const url = "mongodb+srv://harshitchoudhary01:FQyA1tEsdbW9sRqi@namastenode.jfs8l.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("Users");

    const data = {
        firstName : "Hariom",
        lastName: "Choudhary",
        age: "20",
        mobileNo: "8815671256",
    }

    //insert "one" also insert "many" but goes in array
    const insertField = await collection.insertOne(data);
    console.log("insert a field =>", insertField);

    //like select "find results"
    const findResult = await collection.find({LastName}).toArray();
    console.log("Found documents =>", findResult);

    //for update purpose
    const updateDataSet = await collection.updateMany({lastName: "Choudhary"}, {$set: {lastName: "Pawar"}})
    console.log("Updated datasets =>", updateDataSet);
    
    //to deleta a feild or we can also delete many 
    const deleteField = await collection.deleteOne({firstName : "Hariom"});
    console.log("delete a field =>", deleteField);

    //count 
    const count = await collection.countDocuments({firstName: "Harshit"});
    console.log("No. of documents =>", count);

    return "done.";
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());

