// Let’s show the explain plan and see there is no index
db.practice.find({x:1}).explain()
