var titlearray =[{"dept":"COMPUTER SCIENCE AND ENGINEERING","img":"https://www.sharda.ac.in/blog/wp-content/uploads/2020/03/Image-1.jpg"},
{"dept":"MECHANICAL ENGINEERING","img":"https://manavrachna.edu.in/wp-content/uploads/2020/06/Mechanical-Engineering.jpg"},
{"dept":"ELECTRICAL AND ELECTRONICS ENGINEERING","img":"https://www.rsrec.in/images/eee.png","link":"https://getfreecourses.co/complete-machine-learning-and-data-science-zero-to-mastery/"},
{"dept":"ELECTRONICS AND COMMUNICATION ENGINEERING","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObxEn4gzErdIqxZ2r_vt8wgF6m8IdphR4vw&usqp=CAU"},
{"dept":"GENERAL APTITUDE","img":"https://leverageedu.com/blog/wp-content/uploads/2020/04/General-Aptitude.jpg"},
{"dept":"CIVIL ENGINEERING","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEsDlvjZR37DZVMJSsSwIO3iFC6ohC8r1VQ&usqp=CAU"}];
var dynamic = document.querySelector('.container');  
for (var i = 0; i < titlearray.length; i++) {
  var fetch = document.querySelector('.container').innerHTML;  
  dynamic.innerHTML = `
   <div class="cards">
   <a href="${titlearray[i].link}" target="_blank">

    <div class="card-item">

           <img src="${titlearray[i].img}"style="height: 200px;width: 100%">
     
      <div class="card-info">
        <h2 class="card-title">${titlearray[i].dept}</h2>
       
      </div>
    </div>
  </a>
  </div>`+fetch;
} 
