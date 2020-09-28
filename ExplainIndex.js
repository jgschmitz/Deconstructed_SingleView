// Let’s show the explain plan and see there is now an index (see IXSCAN)
db.practice.find({x:1}).explain()
