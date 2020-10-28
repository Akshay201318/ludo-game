
// Fucntion to change the shadow on dice container accroding to the active user
let shadow='din-g';
let diceNo=0;
function changeShadow(shadow){
    document.getElementById(shadow).style.boxShadow="5px 5px 20px red ";
}
changeShadow(shadow);

let id='dotg-';
function changeActive(){
    var random=Math.floor(Math.random()*6+1);
    
    
    for(let i=1;i<=6;i++){
        if(i>random)
        {
            document.getElementById(id+i).style.display='none';
        }
        else{
            document.getElementById(id+i).style.display='block';
        }
        
    }
    document.getElementById(shadow).style.boxShadow='none';
    if(diceNo<3)
    {
        diceNo++;
    }
    else{
        diceNo=0;
    }
    
    if(diceNo==0){
        shadow='din-g';
        id='dotg-'
    }
    else if(diceNo==1){
        shadow='din-y';
        id='doty-'
    }
    else if(diceNo==2){
        shadow='din-b';
        id='dotb-'
    }
    else if(diceNo==3){
        shadow='din-r';
        id='dotr-'
    }
    
    
    changeShadow(shadow);
    
};


// code to add movement to the goties
let gStart=5;

let posg_1=-1;
let posg_2=-1;
let posg_3=-1;
let posg_4=-1;


function move(name){
    if(name ==='g1')
    {
        let ans=document.getElementById('g1');
        if(posg_1 === -1)
        {
            ans.style.display='none';
            posg_1=gStart;
        }
        else if(posg_1+random < 72)
        {
            for(let i=posg_1;i<=posg_1+random;i++){
                ans.style.display='none';
                setTimeout(() => {
                   

                    let cid='c-'+i;
                    let cell=document.getElementById('cid');
                    cell.appendChild(ans);
                    ans.style.display='block';
                    
                }, 300);
            }
            posg_1+=random;
            
        }
    }
}



