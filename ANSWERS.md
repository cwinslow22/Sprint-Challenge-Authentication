<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
A: Sessions are used to persist data between page requests.  It allows a server to store information about a client.
2. What does bcrypt do to help us store passwords in a secure manner.
A: bcrypt lets us hash passwords which keeps them more secure.
3. What does bcrypt do to slow down attackers?
A: bcrypt slows down attackers by allowing us to specify how many hashing rounds to use.  The more hashing rounds used the more difficult it is for an attacker to break.  Also the fact the attacker doesn't know how many rounds were used makes it more difficult as well.
4. What are the three parts of the JSON Web Token?
A: The three parts of JSON web token are:  header, payload and signature.