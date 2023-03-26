
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

const publishing = document.querySelector("#publishing");
const analyses = document.querySelector("#analyses");
const spaces = document.querySelector("#spaces");
const advocacy = document.querySelector("#advocacy");
var bg = document.querySelector("#bgclr");








window.addEventListener("load", (event) => {
    getData(0);
  });
  publishing.addEventListener("click", (event) => {
    getData(0);
    bg.classList.remove("bg-red-900");
    bg.classList.remove("bg-green-900");
    bg.classList.remove("bg-blue-900");
    bg.classList.add("bg-yellow-900");
    publishing.classList.add("bg-blue-600", "text-white")
    publishing.classList.remove("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")
    analyses.classList.remove("bg-blue-600")
    spaces.classList.remove("bg-blue-600")
    advocacy.classList.remove("bg-blue-600")

    analyses.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")
    advocacy.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")
    spaces.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")
//
analyses.classList.add("text-gray-600");
advocacy.classList.add("text-gray-600");
spaces.classList.add("text-gray-600");
  });
  analyses.addEventListener("click", (event) => {
    getData(1);
    bg.classList.remove("bg-red-900");
    bg.classList.remove("bg-yellow-900");
    bg.classList.remove("bg-blue-900");
    bg.classList.add("bg-green-900");
    publishing.classList.remove("bg-blue-600")
    spaces.classList.remove("bg-blue-600")
    advocacy.classList.remove("bg-blue-600")
    analyses.classList.add("bg-blue-600", "text-white")
    analyses.classList.remove("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")
    //
    publishing.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")
    advocacy.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")
    spaces.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")


//

advocacy.classList.add("text-gray-600");
spaces.classList.add("text-gray-600");
publishing.classList.add("text-gray-600");

  });
  spaces.addEventListener("click", (event) => {
    getData(2);
    bg.classList.remove("bg-red-900");
    bg.classList.remove("bg-yellow-900");
    bg.classList.remove("bg-green-900");
    bg.classList.add("bg-blue-900");
    publishing.classList.remove("bg-blue-600");
    analyses.classList.remove("bg-blue-600");
    spaces.classList.add("bg-blue-600", "text-white");
    advocacy.classList.remove("bg-blue-600");
    spaces.classList.remove("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600");
    analyses.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600");
    publishing.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600");
    advocacy.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600");
//
analyses.classList.add("text-gray-600");
advocacy.classList.add("text-gray-600");
publishing.classList.add("text-gray-600");
  });
  advocacy.addEventListener("click", (event) => {
    getData(3);
    bg.classList.remove("bg-red-900");
    bg.classList.remove("bg-green-900");
    bg.classList.remove("bg-blue-900");
    publishing.classList.remove("bg-blue-600")
    analyses.classList.remove("bg-blue-600")
    spaces.classList.remove("bg-blue-600")
    advocacy.classList.add("bg-blue-600","text-white")
    bg.classList.add("bg-blue-600","text-white");
    advocacy.classList.remove("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")
    analyses.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")
    publishing.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")
    spaces.classList.add("border-2", "border-gray-600", "rounded-md", "bg-gray-100", "text-gray-600")

//
analyses.classList.add("text-gray-600");
spaces.classList.add("text-gray-600");
publishing.classList.add("text-gray-600");
  });


  const element = document.querySelector('.functionalities');
  const observer = new IntersectionObserver(entries => {
    element.classList.toggle( 'fadein', entries[0].isIntersecting );
    melement.classList.toggle( 'iscale', entries[1].isIntersecting );


  });
  
  observer.observe( element );

  
  const myelement = document.querySelector('#fonctionalityImage');
  const myobserver = new IntersectionObserver(entries => {
    myelement.classList.toggle( '', entries[0].isIntersecting );


  });
  
  myobserver.observe( myelement );



  const melement = document.querySelector('#headerimage');
  const mobserver = new IntersectionObserver(entries => {
    melement.classList.toggle('tilt-in-top-1', entries[0].isIntersecting );


  });
  
  mobserver.observe( melement );
  mobserver.observe( melement );


  myobserver.observe( myelement );

  //all blogs
  function getblogs(){
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => {
        let output = ``;
      data.forEach(blog => {
         output += `<div class="blogelement flex flex-col items-center justify-center p-10" id="${blog.id}">
        <img src="${blog.image}" alt="" srcset="">
        <h3 class="text-xl text-white font-bold leading-8">${blog.title}</h3>
        <p class="text-white">${blog.description} <br> <a href="./detailedBlogue.html#${blog.id}" class="seeblog text-base font-semibold leading-7 ml-4 text-green-500">Learn more <span aria-hidden="true">→</span></a></p>
        <div class="profile flex items-center justify-center gap-8 m-4">
            <img src="./public/logo.png" alt="" srcset="" class="rounded-full h-8 w-8 border-2 border-white p-1">
            <div >
                <h6 class="text-white text-lg font-bold leading-3">symphoni social</h6>
                <p class="text-green-400 opacity-50 text-sm">digital marketing team @symphoni</p>
        
            </div>
        </div>
        
    </div>`;

      });
      document.querySelector("#allblogs").innerHTML = output;
    }
    )

  
  }
  //blogue
  function getBlog(bid){
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => 
        {
  const blogoutput = ` <div class="container flex flex-col items-center justify-between" >
  <div class="profile flex items-center justify-center gap-8 mt-10">
      <img src="./public/logo.png" alt="" srcset="" class="rounded-full h-14 w-14 border-2 border-white p-1">
      <div">
          <h6 class="text-white text-xl font-bold leading-6">symphoni social</h6>
          <p class="text-green-400 opacity-50 text-lg">digital marketing team @symphoni</p>
  
      </div>
  </div>
  <div class="mx-auto max-w-2xl lg:text-center lg:m-16 m-3">
      <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-4xl">${data[bid].title}</p>
      <p class="mt-6 text-lg leading-8 text-white">${data[bid].description}</p>
    </div>
    <div class="container">
      <div class="flex justify-center items-center scale-75 lg:scale-100">
      <img src="${data[bid].image}" alt="blogue image" srcset="" class="">
      </div>
      <p class="mt-6 text-lg leading-8 text-white lg:px-20">${data[bid].body}</p>
  
    </div>
  
  
  </div>
  
  
  
  `;
  
     console.log(data[bid]);
    document.querySelector("#blogueArea").innerHTML = blogoutput;
  
  
        }
    )
  }
  
  
