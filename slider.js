slider=document.querySelector(".change");
next=document.querySelector(".next");
previous=document.querySelector(".previous");
image=["pic1.jpg","pic2.jpg","pic3.jpeg","pic4.jpeg","pic5.jpeg","pic6.jpg","pic7.jpeg","pic8.jpeg","pic9.jpeg","pic10.jpeg"]

i=0;


next.addEventListener("click", ()=>{
    slider.setAttribute("src","/creusolimages/"+image[i]);
   if(i<9)
    {i++;}

})


previous.addEventListener("click", ()=>{
    slider.setAttribute("src","/creusolimages/"+image[i]);
   if(i>0)
    {i--;}

})

