# Limble Comments

## Goal of the project
Build a simple Angular (latest) app that has this functionality:

A list of comments
A field that can allow people to add new comments
The field should be able to detect when you type in someone's name starting with an @ like slack does. Here is a static set of users:

[
               {'userID' : 1, 'name' : 'Kevin'},
               {'userID' : 2, 'name' : 'Jeff'},
               {'userID' : 3, 'name' : 'Bryan'},
               {'userID' : 4, 'name' : 'Gabbey'},
 ]

When the entry is entered it needs to detect which user was typed in and trigger a javascript function that alerts their name.

The primary purpose of this project is to get the detect @user portion ready to port into our comment feature inside of Limble.  So don't worry about things like persistence.  Do make the styling of the dropdown and tagging of users look and function well because that is what is being ported over :).

There is only 1 rule: don't use a library that provides this functionality, we want to see how you write it.

## Get Started
Simple run `npm install` and `npm start` commands. Enjoy. :)