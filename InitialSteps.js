// Lets start simple 101
// create db and insert a record
db.foo.insert({x:123})

// lets find that record
db.foo.find({x:123})

//Let show the explain plan and see there is no index
db.foo.find({x:123}).explain()

//Lets create and index on x:1
db.foo.createIndex({x:1})

//Lets show that explain plan with the index created
db.foo.find({x:123}).explain()

//We now drop the index
db.foo.dropIndex({x:1})

//Show explain plan again with index gone
db.foo.find({x:123}).explain()

//Drop record
db.foo.remove({x:123})
