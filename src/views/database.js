import MongoClient from 'mongodb';

export async function connect() {
	try{
		const client = await MongoClient.connect('mongodb://localhost:27017/1EVA', {
		// const client = await MongoClient.connect('mongodb+srv://admin:admin@arduino-kmlvj.mongodb.net/test?retryWrites=true&w=majority', {
		// const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0-sentg.mongodb.net/?retryWrites=true&w=majority', {
			//useNewUrlParse: true,
			useUnifiedTopology: true
		})
		const db = client.db('capturas')
		console.log('DB is connected!')
		return db;
	} catch(e) {
		console.log(e);
	}
	
}

