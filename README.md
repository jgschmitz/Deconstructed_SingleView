**Deconstructed SingleView MongoDB E-Workshop**

[id]:https://www.mongodb.com/use-cases/single-view "MongoDB Single View"

All that will be needed to complete this course is a web browser.
Everything will execute from the mongodb shell.
We will be using MongoDB 4.4 for this workshop.

This class will walk the customers through these steps<br>

*Initial beginning steps with MongoDB*

*Crud operations Create, Insert, Update, Delete*

*How to do an insert and update on multiple collections*

*Using $union and an aggregation query to bring it all together*

*Then visualizing this data in mongodb charts for the finale*

**Step 1**<br>
Let's get started! Our first step is to create eworkshop database and then insert a record into a collection called singleview

**Step 2**<br>
Now lets do a find on the read on the document and see what we inserted to the collection

**Step 3**<br>
Lets look at the explain plan to see that no index as yet to be created. The $explain operator provides information on the query plan. It returns a document that describes the process and indexes used to return the query

**Step 4**<br>
Indexes are important for performant queries just like in any database so lets create an index on {x.1}

**Step 5**<br>
After creating our index lets have another look and you will see IXSCAN midway down and that you have created an index and also that it is a forward index. The forward index is essentially a list of pairs consisting of a document and a word, collated by the document.

**Step 6**<br>
Ok now lets go ahead and drop that index and we will see in the explain plan that its back to doing a collection scan again.

**Step 7**<br>
To make everything clean again lets now also drop that record we inserted in step one.

**Step 8**<br>
Now we are going to load three different datasets to build our single view demo lets start with "associates" data.

**Step 9**<br>
Then we are going to create and load "customer" data.

**Step 10**<br>
Last but not least we will now create and load "friends" data

**Step 11**<br>
Now, to begin creating this aggregation of people you know, let’s combine
all three collections of data. First, we’ll use a $set stage to create a named group of data for your Associates.

**Step 12**<br>
Now, we will create the results of the union between Associates and Customers.

**Step 13**<br>
Now, we will create the results of the union between Associates, Customers, and Friends.

**Step 14**<br>
Now lets add sorting Sort by last_name, then first_name.

**Step 15**<br>
Ok great! lets go ahead and sort by gender.

**Step 16**<br>
We are getting near the finish line! To create a materialized view, add a ‘merge’ operation at the end of the
aggregation pipeline to Insert/Update GenderCount_MaterializedView with aggregation by gender group.










