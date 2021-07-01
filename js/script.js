const cardCont = document.querySelectorAll(".card-cont aside");
const tabBtn = document.querySelectorAll(".tab-btn");
const myArr = [];

tabBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const clicked = e.currentTarget.dataset.id;
    const similarClass = cardCont.forEach(function (item) {
        if (!myArr.includes(item.className)) {
            myArr.push(item.className);
        }
        return myArr;
    });
    // console.log(myArr);
    if (myArr.includes(clicked)) {
        // console.log(clicked);
    }
  });
});

// cardCont.forEach(function (e) {
//     console.log(e.className);
//     return e;
//   });


// console.log(clicked);
// console.log(similarClass);

