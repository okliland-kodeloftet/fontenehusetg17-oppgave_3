console.log('Hello world!');

const hamburgerIcon = document.querySelector("#hamburgerIcon");

console.log(hamburgerIcon);



hamburgerIcon.addEventListener("click", function(){
    console.log("Noe er klikket på")

    const navList = document.querySelector("#navId");
    console.log(navList);

    navList.classList.toggle("navHamburgerList")
});