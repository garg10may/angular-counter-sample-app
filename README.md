# AngularCounterSampleApp

It serves as a very good example of what's wrong with Angular state managment. 
Utterly wrong. If you go by standard class properties, counter is maintaing it's,
while list of counters is being maintained by it, this is problematic it shouldn't allow this architecture. counter should be a controlled component of counters. 

Though angular allows you to have a controlled component it doesn't have this thinking naturally. State is spread all over the application. i.e. you can also
do state bubbling here but no tutorial will teach you that since the idea of 
single state flow doesn't apply naturally, also since it allows mutating directly
and both input and output and two way state changes again it becomes difficult. 

One can make no isue of [()] and bubble the state or use redux for state management
than again we are going the react way. It doesn't enforce these things. 

