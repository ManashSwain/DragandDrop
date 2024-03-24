let  items = document.getElementsByClassName("item");
let  box1 = document.getElementById("box1");
let  box2 = document.getElementById("box2");
let  box3 = document.getElementById("box3");
let  selectedItem = null ;

for(item of items){
   item.addEventListener("dragstart",(e)=>{
     selectedItem = e.target ;

      box2.addEventListener("dragover",(e)=>{
          e.preventDefault();
      })

      box2.addEventListener("drop",()=>{
         box2.appendChild(selectedItem);
        
      })

      box1.addEventListener("dragover",(e)=>{
          e.preventDefault();
      })

      box1.addEventListener("drop",()=>{
         box1.appendChild(selectedItem);
       
      })

      box3.addEventListener("dragover",(e)=>{
           e.preventDefault();
         })

        box3.addEventListener("drop",()=>{
           box3.appendChild(selectedItem);
         
        
      })

   })
}





