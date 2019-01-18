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
	}else{
		console.log("connected to mongodb");
	}
	const db = client.db('Todo');
	// db.collection('Todos').insertOne({
	// 	text : 'something',
	// 	completed :false
	// },(err,result)=>{
	// 	if(err)
	// 	{
	// 		console.log('unable to insert',err);
	// 	}else
	// 	{
	// 		console.log(JSON.stringify(result.ops,undefined,2));
	// 	}
	// });

	// db.collection('Todos1').insertOne({
	// 	test1 : 'something1',
	// 	test2 : 'something2',
	// 	test3 :' something3'
	// },(err,result)=>{
	// 	if(err)
	// 	{
	// 		console.log("unable t connect",err);
	// 	}else
	// 	{
	// 		console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	// 	}
	// });

	client.close();
});