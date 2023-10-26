let input=document.querySelector(".input1");
let btn1=document.querySelector(".btn");
let btn2=document.querySelector(".btn_down")
btn1.addEventListener("click",(e)=>{
    e.preventDefault();
    let search= input.value;
    getImages(search,1);
    btn2.style.display="flex"; 
    document.querySelector(".image_container").replaceChildren("");
    
})


 async function getImages(search,page){
    let data=await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=-GtxFDvgJZghIKMSpZ9_tk6dUaYl2YJpCLPEtyTDSV0`)
    let readable_data=await data.json();
    let result=readable_data.results;
    result.forEach(element => {
        const imgContainer=document.createElement('div');
        imgContainer.classList.add("image")
        imgContainer.innerHTML=
        `
        <img src=${element.urls.small} alt="images">
        <p>${element.alt_description}
        </p>
        `
        document.querySelector(".image_container").appendChild(imgContainer);
       
    });

}
let next=1;
btn2.addEventListener("click",(e)=>{
    e.preventDefault();
    let search= input.value;
    getImages(search,++next);

})