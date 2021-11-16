const setUsers = require('/src/userGenerator')
const faker = require('faker')
const { hashChangeListener, updateUserContainer } = require('/src/renderer')

setUsers();
updateUserContainer();