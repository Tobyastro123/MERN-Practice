const navbar = () => {
   return ` <div id="navbar">
   <div id="logo">
       Fwiggy
   </div>
   <div id="n2">
   
   <input type="search" id="search" oninput="get()" placeholder="Search for Recipies"><button><i class="fa-solid fa-magnifying-glass"></i></button>
   </div>
   <div id="n1">
   <h3><a href="latest.html">Latest  Recipies </a> </h3>
      <h3><a href="login.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg></a></h3>
   </div>
   </div>`


}

  
export default navbar;