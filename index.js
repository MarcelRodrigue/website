
function getData(uid){
    fetch('data.json')
    .then(res => res.json())
    .then(data => 
        {
const output = `

<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl fadein">${data[uid].title}</h2>
            <p class="mt-6 text-lg leading-8 text-gray-500 fadein">${data[uid].body}
            <a href="#" class="text-base font-semibold leading-7 ml-4 text-blue-600">Learn more <span aria-hidden="true">→</span></a> 
            
            </p>

`;
const outputimg = `
<image class="shadow-gray-500/40 shadow-lg shadow-2xl"
src="${data[uid].image}"
alt='logo'
/>
`;
     console.log(data[uid]);
    document.querySelector(".functionalities").innerHTML = output;
    document.querySelector("#fonctionalityImage").innerHTML = outputimg;


        }
    )
}


    
  
  



//navigation

function getProduct(Pid){
  fetch('Product.json')
  .then(res => res.json())
  .then(data => 
      {
const productOutput = `<div class="container flex flex-col items-center justify-between mb-10" >
<div class="profile flex items-center justify-center gap-5 flex-col md:flex-row mt-10">
    <img src="./public/dark fav icon/transparent_dark_fav_icon.jpeg" alt="" srcset="" class="rounded-full h-14 w-14 border-2 border-gray-900 p-1">
    <div>
        <h6 class="text-gray-900 text-xl font-bold leading-6 text-center ">symphoni social</h6>
        <p class="text-blue-700 opacity-50 text-lg">digital marketing team @symphoni</p>

    </div>
</div>
<div class="mx-auto max-w-2xl lg:text-center lg:m-16 m-3">
    <p class="mt-2 text-4xl font-bold tracking-tight center text-gray-900 sm:text-4xl center px-5">${data[bid].title}</p>
    <p class="mt-6 text-lg leading-8 text-gray-800 px-5">${data[bid].description}</p>
  </div>
  <div class="container">
    <div class="flex justify-center items-center scale-75 lg:scale-100">
    <img src="${data[bid].image}" alt="blogue image" srcset="" class="">
    </div>
    <p class="mt-6 text-lg leading-8 px-5 text-gray-700 lg:px-20 pb-10">${data[bid].body}</p>

  </div>


</div>



`;

   console.log(data[bid]);
  document.querySelector("#blogueArea").innerHTML = productOutput;


      }
  )
}