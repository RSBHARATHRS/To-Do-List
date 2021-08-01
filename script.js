let add_btn = document.getElementById("add-task-button");
let input_task = document.getElementById("input-task");
let ul = document.getElementById("task-list");
let arr=[];
arr=JSON.parse(localStorage.getItem("tasks")) || [];

for(let i=0;i<arr.length;i++){
    createLi(arr[i]);
    console.log("Locally saved task "+i+" :"+arr[i]);
}


add_btn.addEventListener("click",function (){
    let val=input_task.value;
    if(val==""){
        alert("Please Enter Valid Input");
    }else{
        createLi(val);
        arr.push(val);
        localStorage.setItem("tasks", JSON.stringify(arr));
        console.log("New task added: " + val );
    }
})


function createLi(task){
    let li = document.createElement("li");
    let inp=document.createElement("input");
    let span = document.createElement("span");
    let txtNode = document.createTextNode(task);
    let btn = document.createElement("button");


    span.appendChild(txtNode);
    span.setAttribute("class","task");
    inp.setAttribute("type","checkbox");
    btn.setAttribute("class","delete-btn");
    btn.setAttribute("src","url(/assests/delete.png)")
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(inp);
    li.appendChild(span);
    //li.appendChild(txtNode);
    li.appendChild(btn);

    btn.addEventListener("click",function (){
        let temp=arr.splice(arr.indexOf(task),1);
        console.log("removed task : "+ temp);
        localStorage.setItem("tasks", JSON.stringify(arr));
        li.remove();
    })

    ul.appendChild(li);
    localStorage.setItem("tasks", JSON.stringify(arr));
    //li.innerText=input_task.value;

    input_task.value="";
}