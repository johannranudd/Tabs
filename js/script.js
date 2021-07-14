// const cardCont = document.querySelectorAll(".card-cont aside");
// const tabBtn = document.querySelectorAll(".tab-btn");
// const history = document.querySelector(".history");

// window.addEventListener('DOMContentLoaded', function() {
//   history.classList.add('active');
// })

// function displayContent(item) {
//   item.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       const clicked = e.currentTarget.dataset.id;
//       const similarClass = cardCont.forEach(function (items) {
//         if (clicked === items.className) {
//           if (!items.classList.contains("active")) {
//             items.classList.add("active");
//             return items;
//           }
//         }
//         if (btn !== items) {
//           items.classList.remove("active");
//         }
//       });
//       // console.log(similarClass);

//     });
//   });
// }

// displayContent(tabBtn)
// // const similarClass =

// !with object

// const object = [
//   {
//     title: "History",
//     paragraph: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun
//     mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights.
//     Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde
//     try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh
//     wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie
//     ugh chambray, craft beer pork belly flannel tacos single-origin
//     coffee art party migas plaid pop-up.`,
//   },
//   {
//     title: "Vision",
//     paragraph: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
//     crucifix offal deep v hella biodiesel. Church-key listicle polaroid
//     put a bird on it chillwave palo santo enamel pin, tattooed meggings
//     franzen la croix cray. Retro yr aesthetic four loko tbh helvetica
//     air plant, neutra palo santo tofu mumblecore. Hoodie bushwick
//     pour-over jean shorts chartreuse shabby chic. Roof party hammock
//     master cleanse pop-up truffaut, bicycle rights skateboard affogato
//     readymade sustainable deep v live-edge schlitz narwhal.`,
//     // listItem: [`list item`, `list item`, `list item`],
//   },
//   {
//     title: "Goals",
//     paragraph: `Chambray authentic truffaut, kickstarter brunch taxidermy vape
//     heirloom four dollar toast raclette shoreditch church-key. Poutine
//     etsy tote bag, cred fingerstache leggings cornhole everyday carry
//     blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape
//     hashtag marfa readymade direct trade man braid cold-pressed roof
//     party. Small batch adaptogen coloring book heirloom. Letterpress
//     food truck hammock literally hell of wolf beard adaptogen everyday
//     carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo
//     booth quinoa chicharrones.`,
//   },
// ];

// const cardCont = document.querySelector(".card-cont");
// const tabBtns = document.querySelectorAll(".tab-btn");
// const asideItem = document.querySelector('aside');

// // tabBtns.forEach(function(btn) {
// //   btn.addEventListener("click", function(e) {
// //     const clicked = e.currentTarget.dataset.id;

// //   })
// // })

// window.addEventListener("DOMContentLoaded", function () {
//   const displayObject = object.map(function(item) {
//     return `<h3>${item.title}</h3>
//     <p>
//     ${item.paragraph}
//     </p>`;

//   }).join("");
//   if (cardCont.children > 1) {

//   }
//   asideItem.classList.add('active');
//   asideItem.innerHTML = displayObject;

// });

// console.log(cardCont.children);

// !test

// const object = [
//   {
//     title: "History",
//     paragraph: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun
//     mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights.
//     Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde
//     try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh
//     wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie
//     ugh chambray, craft beer pork belly flannel tacos single-origin
//     coffee art party migas plaid pop-up.`,
//   },
//   {
//     title: "Vision",
//     paragraph: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
//     crucifix offal deep v hella biodiesel. Church-key listicle polaroid
//     put a bird on it chillwave palo santo enamel pin, tattooed meggings
//     franzen la croix cray. Retro yr aesthetic four loko tbh helvetica
//     air plant, neutra palo santo tofu mumblecore. Hoodie bushwick
//     pour-over jean shorts chartreuse shabby chic. Roof party hammock
//     master cleanse pop-up truffaut, bicycle rights skateboard affogato
//     readymade sustainable deep v live-edge schlitz narwhal.`,
//     listItem: [`list item`, `list item`, `list item`],
//   },
//   {
//     title: "Goals",
//     paragraph: `Chambray authentic truffaut, kickstarter brunch taxidermy vape
//     heirloom four dollar toast raclette shoreditch church-key. Poutine
//     etsy tote bag, cred fingerstache leggings cornhole everyday carry
//     blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape
//     hashtag marfa readymade direct trade man braid cold-pressed roof
//     party. Small batch adaptogen coloring book heirloom. Letterpress
//     food truck hammock literally hell of wolf beard adaptogen everyday
//     carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo
//     booth quinoa chicharrones.`,
//   },
// ];

// const cardCont = document.querySelectorAll(".card-cont aside");
// const tabBtns = document.querySelectorAll(".tab-btn");

// let counter = 0;

// // function displayObject(objectPar) {
// //   let item = objectPar[counter];
// //   cardCont.innerHTML = `<h3>${item.title}</h3>
// //   <p>
// //     ${item.paragraph}
// //   </p>`;
// // }

// // window.addEventListener("DOMContentLoaded", function () {
// //   displayObject(object);
// // });

// tabBtns.forEach(function(btn) {
//   btn.addEventListener("click", function(e) {
//     const clicked = e.currentTarget.dataset.id;
//     const elements = cardCont.forEach(function(asides) {
//       if (asides.className === clicked) {
//         asides.classList.add('active');
//         return asides;
//       }
//     })
//     // cardCont.forEach(function(item) {
//     //   if ( item !== elements) {
//     //     item.classList.remove('active');
//     //   }
//     // })
//     console.log(elements);
//   })
// });

// !sdcvsdvsdc (works)

// const cardCont = document.querySelector(".card-cont");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");

// cardCont.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   const clicked = e.target;
//   if (id) {
//     // remove active from other btns
//     btns.forEach(function (btn) {

//       // console.log(btn);
//       btn.classList.remove('active');
//     });
//     clicked.classList.add('active');

//     articles.forEach(function(art) {
//       if (art.className.includes('active')) {
//         art.classList.remove('active');
//       }
//       if (art.id == id) {
//         art.classList.add('active');
//         console.log(art);
//       }
//     })
//     }
    
// });

// !new test (works)

// const cardCont = document.querySelector(".card-cont");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");


// cardCont.addEventListener("click", function(e) {
//   const id = e.target.dataset.id;
  
//   if (id) {
//     // button
//     btns.forEach(function(btn) {
//       btn.classList.remove('active');
//       if (btn.dataset.id == id) {
//         btn.classList.add('active');
//       }
//     })
//     //article
//     articles.forEach(function(art) {
//       art.classList.remove('active');
//       if (art.id == id) {
//         art.classList.add('active');
//       }
//     })
    
//   }
// })

// !new test (works)

// const cardCont = document.querySelector(".card-cont");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");

// cardCont.addEventListener("click", function(e) {
//   const btnId = e.target.dataset.id;
//   if (btnId) {
//     // buttons
//     btns.forEach(function (buttons) {
//       buttons.classList.remove('active');
//       if (buttons.dataset.id == btnId) {
//         buttons.classList.add('active');
//       }
//     })
//     // articles
//     articles.forEach(function(art) {
//       art.classList.remove('active');
//       if (art.id == btnId) {
//         art.classList.add('active');
//       }
//     })
//   }
// })

// !test (works)

// const cardCont = document.querySelector(".card-cont");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");


// cardCont.addEventListener("click", function (e) {
//   const btnId = e.target.dataset.id;
//   if (btnId) {
//     btns.forEach(function (buttons) {
//       buttons.classList.remove('active');
//       e.target.classList.add('active');
//     })
//     articles.forEach(function(art) {
//       art.classList.remove('active');
//       if (art.id == btnId) {
//         art.classList.add('active');
//       }
//     })
//   }
// })


// !test (works)

const cardCont = document.querySelector(".card-cont");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

cardCont.addEventListener("click", function (e) {
  const clicked = e.target.dataset.id;
  if (clicked) {
    // buttons
    btns.forEach(function(btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    })
    // article
    articles.forEach(function(art) {
      art.classList.remove('active');
      if (art.id == clicked) {
        art.classList.add('active');
      }
    })
  }
});