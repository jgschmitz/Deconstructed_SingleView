// Let’s show the explain plan and see there is no index
MongoDB Enterprise atlas-shard0:PRIMARY> db.practice.find({x:123}).explain()
