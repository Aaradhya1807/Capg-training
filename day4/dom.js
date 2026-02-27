// // console.log(window);
// // let a=10
// // var b=20
// // const c=30 

// console.log(window);
// console.log("hello");
// window.console.log("hii");

// console.log(document);
// console.log(document.body);
// console.log(document.title);
// console.log(document.head); 
// console.log(document.childNodes);
// console.log(document.body.childNodes);
// console.log(document.body.children[2]);


// let a=document.getElementsByTagName("button")[0]
// a.addEventListener("click",function(){
//     document.body.style.backgroundColor="red"
// });

// let b=document.getElementById("btn")
// b.addEventListener("click",function(){
//     document.body.style.backgroundColor="lightblue"
// });

let st=true
let btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    if(st){
        document.body.style.backgroundColor="grey"
        st=false
    }else{
        document.body.style.backgroundColor="white"
        st=true
    }
}); 
// let c=document.body.children[2]
// console.log(c.parentNode);


// let div1=document.body.children[3]
// let head1=div1.children[2]

// console.log(head1.previousElementSibling);
// console.log(head1.previousSibling);

// let head1=document.getElementsByClassName("Head1")
// console.log(head1);

// let convertedArray=Array.from(head1)
// console.log(convertedArray);

// convertedArray.map(function(el){
//     console.log(el);
//     el.style.color="red"
//     el.style.fontSize="35px"
//     el.style.fontWeight="bold"
//     el.style.backgroundColor="yellow"
// })



// let h1=document.querySelector(".Head1")
// console.log(h1);



// let img1=document.createElement("img");
// img1.src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
// img1.alt="google logo"
// img1.style.width="200px"
// document.body.appendChild(img1)



// let a=document.createElement("h1")
// a.innerText="Click me"
// document.body.append(a)


// let p=document.createElement("p")
// p.textContent="Happy you"
// p.setAttribute("id","p1")
// document.body.append(p)
// console.log(p);
// p.removeAttribute("id")
// console.log(p);


let btn1=document.getElementById("btn1")
btn1.onclick=function buttonClicked(){
    alert("Button clicked")
}






let para = document.getElementById("para1");
let incBtn = document.getElementById("inc");
let decBtn = document.getElementById("dec");

let count = 0;

incBtn.addEventListener("click", function() {
    count++;
    para.textContent = count;
});

decBtn.addEventListener("click", function() {
    count--;
    para.textContent = count;
});
