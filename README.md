# chatbots
# chatbots

Clone repository;

run "npm install";

run "cd src";

run "node app";


to register student - send post request to http://localhost:3000/api/auth/register with body: {firstName, lastName, email, password}

to login student - send post request to http://localhost:3000/api/auth/login with body: { email, password}

to create group - send post request to http://localhost:3000/api/group/create with body:{name (group)} and put auth token to 'authorization' in headers

to enter to group - send post request to http://localhost:3000/api/group/enter with body:{name (group), id (user id)} and put auth token to 'authorization' in headers

to get list of all teachers - send get request to http://localhost:3000/api/teacher/all 

to create a new teacher - send post request to http://localhost:3000/api/teacher/create with body:{firstName, lastName, subject} 

to get list of all lessons - send get request to http://localhost:3000/api/lesson/lessons with body: {group (id)} and put auth token to 'authorization' in headers

to create a new lesson - send post request to http://localhost:3000/api/lesson/create with body: {topic, teacherId, groupId, room, number(ordinal)} and put auth token to 'authorization' in headers

to delete lesson - send delete request to http://localhost:3000/api/lesson/delete with body: {id (lesson)} and put auth token to 'authorization' in headers

to edit lesson - send put request to http://localhost:3000/api/lesson/edit with body: {id (lesson), payload: { properties you want to change}} and put auth token to 'authorization' in headers
