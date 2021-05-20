We need method override 
so that our routers can
work with 
PUT, DELETE

npm i method-override

IT allows us to tkae a post form
and send it to server with special parameter
that tells us if we are doing a put or delete request
and our sever will be smart enough to call the
correct router based on our specific parameters = "_method"

add to server.js

Why we never write
<a href="/something/delete">Delete</a>
is because google will click on all the links
and accidentally delete all infor from our data
via web crawlers, so we use method override!

Because of this we have to replace our Anchor
with an entire **FORM**
    <form method="POST" action="/authors/<%= author.id %>?_method=DELETE" ></form>
    will will call in our controller **router.delete**

We can make a general deleteForm
<form method="POST" action="<%= url %>?_method=DELETE" >
    <button type="submit">Delete</button>
</form>

which takes in a dynamic url


we need `` string interpolation becuase  the dynamic url
will be executed on our backend server


NOTES;
for routes, it is executed from top to bottom
remember to have specific routes on top
and then variable routes 
below after all specific routes 

