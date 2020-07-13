use mongo44_sales;

db.quarterOne.insertMany([{ store: "New York", item: "Chocolates", quantity: 150},{ store: "New York", item: "Cookies", quantity: 100},{ store: "New York", item: "Pie", quantity: 10},{ store: "Boston", item: "Chocolates", quantity: 50},{ store: "Boston", item: "Pie", quantity: 5},{ store: "San Francisco", item: "Cookies", quantity: 120}]);

db.quarterTwo.insertMany([{ store: "New York", item: "Cheese", quantity: 30},{ store: "New York", item: "Pie", quantity: 30},{ store: "New York", item: "Chocolates", quantity: 125},{ store: "New York", item: "Cookies", quantity: 200},{ store: "San Francisco", item: "Cheese", quantity: 50},{ store: "San Francisco", item: "Chocolates", quantity: 150},{ store: "Boston", item: "Cookies", quantity: 100},{ store: "Boston", item: "Nuts", quantity: 100},{ store: "Boston", item: "Pie", quantity: 25}]);

db.quarterThree.insertMany([{ store: "New York", item: "Cheese", quantity: 50},{ store: "New York", item: "Chocolates", quantity: 125},{ store: "New York", item: "Cookies", quantity: 200},{ store: "Boston", item: "Cheese", quantity: 20},{ store: "Boston", item: "Chocolates", quantity: 150},{ store: "Boston", item: "Cookies", quantity: 100},{ store: "San Francisco", item: "Pie", quantity: 50},{ store: "Ontario", item: "Pie", quantity: 75}]);

db.quarterFour.insertMany([{ store: "New York", item: "Cheese", quantity: 100, stock: 20},{ store: "New York", item: "Chocolates", quantity: 200, stock: 10},{ store: "New York", item:"Pie", quantity: 100, stock: 12},{ store: "Boston", item:"Chocolates", quantity: 300, stock: 16},{ store: "Ontario", item: "Cookies", quantity: 500, stock: 322},{ store: "San Francisco", item: "Pie", quantity: 100, stock: 30}]);

// Now, to begin creating this yearly report, we’ll use an
// aggregation to combine all four quarters’ data
// First, we’ll use a $set stage to create a named group of data for the first quarter

db.quarterOne.aggregate( [{ $set: { _id: "2020Q1"} },]);

db.quarterOne.aggregate( [{ $set: { _id: "2020Q1"} },{ $unionWith: { coll: "quarterTwo", pipeline: [ { $set: { _id: "2020Q2"} } ] } },] );

// Now, we will create the results of the union between Quarter 1 and Quarter 2.

db.quarterOne.aggregate( [{ $set: { _id: "2020Q1"} },{ $unionWith: { coll: "quarterTwo", pipeline: [ { $set: { _id: "2020Q2"} } ] } },] )

//now lets add sorting

// Sort by Quarter, then store then item.

db.quarterOne.aggregate( [{ $set: { _id: "2020Q1"} },{ $unionWith: { coll: "quarterTwo", pipeline: [ { $set: { _id: "2020Q2"} } ] } },{ $unionWith: { coll: "quarterThree", pipeline: [ { $set: { _id: "2020Q3"} } ] } },{ $unionWith: { coll: "quarterFour", pipeline: [ { $set: { _id: "2020Q4"} } ] } },{ $sort: { _id: 1, store:1, item: 1} }] )

// Group by item then 

db.quarterOne.aggregate( [{$group: { _id: "$item", total: { $sum: "$quantity" }}},{ $unionWith: { coll: "quarterTwo", pipeline: [ { $group: { _id: "$item", total: { $sum: "$quantity" } } } ] } },{ $unionWith: { coll: "quarterThree", pipeline: [ { $group: { _id: "$item", total: { $sum: "$quantity" } } } ] } },{ $unionWith: { coll: "quarterFour", pipeline: [ { $group: { _id: "$item", total: { $sum: "$quantity" } } } ] } },{ $group: { _id: "$_id", total: { $sum: "$total" } } },{ $sort: { total: -1 }}] )

db.quarterOne.aggregate( [{$group: { _id: {item: "$item",store:"$store"}, total: {$sum: "$quantity" }}}, { $unionWith: { coll: "quarterTwo", pipeline: [ { $group: { _id: {item: "$item",store:"$store"}, total: { $sum: "$quantity" } } } ] } },{ $unionWith: { coll: "quarterThree", pipeline: [ { $group: { _id: {item: "$item",store:"$store"}, total: { $sum: "$quantity" } } } ] } },{ $unionWith: { coll: "quarterFour", pipeline: [ { $group: { _id: {item: "$item",store:"$store"}, total: { $sum: "$quantity" } } } ] } },{ $group: { _id: "$_id", total: { $sum: "$total" } } },{ $sort: { "_id":1, total: 1 }}] )Solution

