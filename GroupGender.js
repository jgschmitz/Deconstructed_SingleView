// Group by gender
db.Associates.aggregate( [{$group: { _id: "$gender", total: { $sum: 1 }}},{ $unionWith: { coll: "Customers", pipeline: [ { $group: { _id: "$gender", total: { $sum: 1 } } } ] } },{ $unionWith: { coll: "Friends", pipeline: [ { $group: { _id: "$gender", total: { $sum: 1 } } } ] } },{ $group: { _id: "$_id", total: { $sum: "$_id" } } },{ $sort: { total: -1 }}] )
