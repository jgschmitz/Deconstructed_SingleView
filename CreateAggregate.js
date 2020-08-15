// Now, to begin creating this aggregation of people you know, Now combine
// all three collections of data.
// First, we’ll use a $set stage to create a named group of data for your Associates
db.Associates.aggregate( [{ $set: { _id: "Associates"} }]);

// Now, we will create the results of the union between Associates and Customers.
db.Associates.aggregate( [{ $set: { _id: "Associates"} },{ $unionWith: { coll: "Customers", pipeline: [ { $set: { _id: "Customers"} } ] } }] );

// Now, we will create the results of the union between Associates, Customers, and Friends.
db.Associates.aggregate( [{ $set: { _id: "Associates"} },{ $unionWith: { coll: "Customers", pipeline: [ { $set: { _id: "Customers"} } ] } },{ $unionWith: { coll: "Friends", pipeline: [ { $set: { _id: "Friends"} } ] } }] )
