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
	
	// db.collection('Todos').findOneAndUpdate(
	// 	{ _id : new ObjectID('5c3f9e176270bf5a8b3f09e9')},
	// 	{
	// 		$set :{
	// 			completed: false
	// 		}
	// 	},{
	// 		returnOriginal : false
	// 	}
	// 	).then((res)=>{
	// 	console.log(res);
	// });
	db.collection('users').findOneAndUpdate(
	{
		location : 'hyd'
	},
	{
		$set :{
			name : 'ajay1'
		},
		$inc :{
			age :1
		}
	},
	{
		returnOriginal : false
	}).then((res)=>{
		console.log(res);
	});
	
	// //client.close();
});