const userContainer = document.querySelector("#user-list");
let hashNumber;

const updateUserContainer = () => {
  const userArr = JSON.parse(localStorage.getItem("userArr"));
  const html = userArr
    .map((user, idx) => {
      return `    
        <a href="#${idx}">
            <div>
            ${idx + 1}. ${user.name}
            <div>${
              hashNumber === idx
                ? `<div class="email-div">Email: ${userArr[idx].email}</div>`
                : ""
            }</div>
            </div>
        </a>
        `;
    })
    .join("");

  userContainer.innerHTML = html;
};

const hashChangeListener = window.addEventListener("hashchange", () => {
  hashNumber = window.location.hash.slice(1) * 1;
  updateUserContainer();
});

module.exports = {
  hashChangeListener,
  updateUserContainer,
};
