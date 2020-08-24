// Now let's add sorting
// Sort by last_name, then first_name.
db.Associates.aggregate( [{ $set: { _id: "Associates"} },{ $unionWith: { coll: "Customers", pipeline: [ { $set: { _id: "Customers"} } ] } },{ $unionWith: { coll: "Friends", pipeline: [ { $set: { _id: "Friends"} } ] } },{ $sort: { last_name: 1, first_name:1} }] )
