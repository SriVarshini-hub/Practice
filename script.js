//    <!-- <li>Home</li>
//             <li>About</li>
//             <li>Product</li>
//             <li>Contact</li> -->

var menuItems = ["Home", "About", "Product", "Contact"];
const createdElement = document.createElement("ul");
menuItems.map((index) => {
  console.log("sdfsdf", index);
  const childElement = document.createElement("li");
  childElement.textContent = index;
  createdElement.appendChild(childElement);
  document.getElementById("menuList").appendChild(createdElement);
  //document.getElementById("menuList").appendChild(createdElement);
});

/* const createdElement = document.createElement("ul");
for (i = 0; i < menuItems.length; i++) {
  const childElement = document.createElement("li");
  childElement.textContent = menuItems[i];
  createdElement.appendChild(childElement);
  document.getElementById("menuList").appendChild(createdElement);
} */
