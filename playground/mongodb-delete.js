//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var obj = new ObjectID();
 //console.log(obj);
MongoClient.connect("mongodb://localhost:27017/Todo",(error,client)=>{
	// var me ={ name :'ajay',age:20};
	// var {name} = me;
	// console.log(name);
	if(error)
	{
		console.log("unable to connect to db");
		return;
	}else{
		console.log("connected to mongodb");
	}
	const db = client.db('Todo');
	//db.collection('Todos').deleteMany({text : 'eat'}).then((result)=>{
	//	console.log(result);
	//});

	// 
	db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
		console.log(res);
	});
	
	// //client.close();
});