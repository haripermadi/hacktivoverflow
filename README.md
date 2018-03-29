# hacktivoverflow
a simple web app st*ackoverflow looks like using vue.js, (vue-cli, vuex) and express.js for server side.

# what is that?
A simple overflow web where user can ask question and other user could answer and votes.

#Build set up

##Server
```
npm install
npm start /nodemon start

```
##Client

```
npm install
npm run dev
npm run build

```

#Routing

**Route** | **HTTP** | **Descrition**
----------|----------|---------------
/users/signup | POST | sign up user
/users/signin | POST | login user
/question | GET | show question list
/question | POST | add new question
/question/:id | PUT | edit question
/question/:id | DELETE | remove a question
/answer | GET | show answer list
/answer | POST | add an answer
/answer/:id | DELETE | remove a question
