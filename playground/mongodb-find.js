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
	// db.collection('Todos').find({ _id : new ObjectID('5c3f9dac26ba5e5a71df1ca2')}).toArray().then((docs)=>{
	// 	console.log('todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('unable to fetch todo',err);
	// });
	db.collection('Todos').find({}).count().then((count)=>{
		console.log(`todos count :${count}`);
	},(err)=>{
		console.log('unable to fetch todo',err);
	});
	db.collection('users').find({name:'sahas'}).toArray().then((dos)=>{
		console.log('users');
		console.log(JSON.stringify(dos,undefined,2));
	});
	
	
	// //client.close();
});