const menu = document.getElementById("menu")
const list = document.querySelector(".list2")
const skill = document.querySelector(".skill")
const proimg = document.querySelectorAll(".proimg")
const cir = document.querySelectorAll(".cir")
const htmlpro = document.querySelector(".htmlpro")
const CSSpro = document.querySelector(".CSSpro")
const jspro = document.querySelector(".jspro")
const Bootpro = document.querySelector(".Bootpro")
const prolink = document.querySelector(".prolink");
const cont2 = document.querySelector(".cont2");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const screenshoots = document.querySelector(".screenshoots");
const proicon = document.querySelector("#proicon");
const proname = document.querySelector("#proname");


// menue toggle


    menu.addEventListener("click", () => {
      // Toggle the display of the list element
      if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
      } else {
        list.style.display = "none";
      }
    });

  



//   about section






function track() {
  rect = skill.getBoundingClientRect();
    
        if (rect.top <= 0 ) {
         htmlpro.classList.toggle('animate')
         CSSpro.classList.toggle('animate2')
         jspro.classList.toggle('animate3')
         Bootpro.classList.toggle('animate4')
        } 


}

window.addEventListener('scroll', track)
window.addEventListener('resize', track)






// project section




function prodis() {
  
  if (window.innerWidth <= 700) {
    proimg.forEach(img);
  }
  else if (window.innerWidth >= 700) {
   proimg.forEach(img2);
  }
  
  function img(item, index, arr) {
    arr[0].src = "image/Screenshot (80).png";
    arr[1].src = "image/Screenshot (82).png";
    arr[2].src = "image/Screenshot (81).png";
  }
  function img2(item, index, arr) {
    arr[0].src = "image/Screenshot_(60).png";
    arr[1].src = "image/Screenshot_(61).png";
    arr[2].src = "image/Screenshot_(62).png";
  }
}

window.addEventListener('resize', prodis)
window.addEventListener('load', prodis)





let arrey = ["https://melakeltsegaye.github.io/project3/", "https://melakeltsegaye.github.io/project4/", "https://melakeltsegaye.github.io/project5/"]

let iconarr = ["fa-brands fa-airbnb", "fa-solid fa-shoe-prints","fa-solid fa-car-side"]

let pronamearr = ["Airbnb","Time to Fashion", "Drive"]

prolink.href = arrey[0]

let i = 0;

cir.forEach((value, index, arr) =>{
  arr[i].style.backgroundColor = "white"
})

arrow1.addEventListener("click", () => {
 
 
  if (i <= -100) {
    screenshoots.style.transform = `translateX(${i+=100}%)`
  
// changing the link of the project

prolink.href = arrey[Math.abs(i/100)]
proicon.className = iconarr[Math.abs(i/100)]
proname.textContent = pronamearr[Math.abs(i/100)]


    // changing the procircle color

      cir.forEach((value, index, arr) =>{
        value.style.backgroundColor = "rgb(75, 75, 75)"
        arr[Math.abs(i/100)].style.backgroundColor = "white"
      })
  }
 
  
})
arrow2.addEventListener("click", () => {
  
  if (i >= -100) {
    screenshoots.style.transform = `translateX(${i-=100}%)`

// changing the link of the project

prolink.href = arrey[Math.abs(i/100)]
proicon.className = iconarr[Math.abs(i/100)]
proname.textContent = pronamearr[Math.abs(i/100)]

// changing the procircle color

      cir.forEach((value, index, arr) =>{
          value.style.backgroundColor = "rgb(75, 75, 75)"
          arr[Math.abs(i/100)].style.backgroundColor = "white"
      })
    
  }
  
  
})



// contact section




function send() {
  Email.send({
    SecureToken: " 07472c2b-7a07-4868-a61f-d304e0fa4703 ",
    To : 'melakeltsegaye@gmail.com',
    From : document.getElementById('conemail').value,
    Subject : "new contact",
    Body : document.getElementById('contname').value + " " + 
    document.getElementById('contmes') + document.getElementById('conemail').value
}).then(
  message => alert(message)
);
}