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
  const blogoutput = `<div class="container flex flex-col items-center justify-between mb-10" >
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
    document.querySelector("#blogueArea").innerHTML = blogoutput;
  
  
        }
    )
  }
  function podcast(){
    fetch('podcast.json')
    .then(res => res.json())
    .then(data => {
        let output = ``;
        if(data.length > 0){

       
      data.forEach(blog => {
         output += `
         <div class="blogelement flex flex-col items-center justify-center p-10 text-center" id="${blog.id}">
        <img src="./public/symphoni_banner.jpeg" alt="" srcset="" class="rounded-full h-32 w-32 md:h-48 md:w-48">
        <h3 class="text-xl text-white font-bold leading-8 text-center">${blog.title}</h3>
        <p class="text-white text-center">${blog.description} <br> <a href="./podcast.html#${blog.id}" class="seeblog text-base font-semibold leading-7 ml-4 text-green-500">Listern now <span aria-hidden="true">→</span></a></p>
        
    </div>`;

      });
      document.querySelector("#allblogs").innerHTML = output;
    }else{
      document.querySelector("#allblogs").classList.remove('grid', 'lg:grid-cols-3', 'lmd:grid-cols-2', 'grid-cols-1');
      output = `
      <div class="flex justify-center items-center gap-4 " >
      <div class="blogelement flex flex-col items-center justify-center p-10 text-center mt-10 mb-10" id="">
      <img src="./public/symphoni_banner.jpeg" alt="" srcset="" class="rounded-full h-32 w-32 md:h-48 md:w-48">
      <h3 class="text-xl text-white font-bold leading-8 text-center">No blog At the moment</h3>
      <p class="text-white text-center">Sorrry at the moment the team is working on bringing the best quality blogs and content to you so subscribe to our news letter to stay informed <br> <a href="index.html" class="seeblog text-base font-semibold leading-7 ml-4 text-green-500">Join the news letter<span aria-hidden="true">→</span></a></p>
      </div>`;

      document.querySelector("#allblogs").innerHTML = output;

    }






      //
    }
    )

  
  }