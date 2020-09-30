var inp1;
var ans;
var operation;

var buttons=document.querySelector(".buttons");

buttons.addEventListener("click",function (e){
    var key=e.target.textContent;
    
    console.log("Button pressed: "+ key );
    var ans= document.getElementById("data")
    console.log(ans);
    ans.textContent=key;
    

} );
function clr() 
         { 
             document.getElementById("answer").value = "" 
         } 

function add()
{
             inp1=document.querySelector(".btn").addEventListener("click",displayData );
             if (ans!==0)
             {
             ans=ans+imp1;
             }
             else{
                document.querySelector(".btn").addEventListener("click",displayData );
             }
         }

