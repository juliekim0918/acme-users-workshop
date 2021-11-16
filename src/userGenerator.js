const faker = require('faker')

const setUsers = () => {
  let newUsers = new Array(50).fill("").map((item, idx) => {
    return faker.helpers.userCard();
  });
  localStorage.setItem("userArr", JSON.stringify(newUsers));
};


module.exports = setUsers