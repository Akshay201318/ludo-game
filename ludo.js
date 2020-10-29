

var cellNo=document.getElementsByClassName('cells');
var rdice = document.getElementsByClassName('dice-r');
var gdice = document.getElementsByClassName('dice-g');
var bdice = document.getElementsByClassName('dice-b');
var ydice = document.getElementsByClassName('dice-y');

//  All playes 

var r=document.getElementsByClassName('r');
var g=document.getElementsByClassName('g');
var b=document.getElementsByClassName('b');
var y=document.getElementsByClassName('y');

//All safe places

var safe=[45, 56, 64, 2, 9, 20, 28, 41, 45]

// paths of all players

var gpath=[ 2, 3, 4, 5, 6, 12, 11, 10, 9, 8, 7, 13, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 36, 42, 41, 40, 39, 38, 37, 48, 47, 46, 45, 44, 43, 49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 72, 71, 70, 69, 68, 67];
var ypath=[20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 36, 42, 41, 40, 39, 38, 37, 48, 47, 46, 45, 44, 43, 49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 72, 2, 3, 4, 5, 6, 12, 11, 10, 9, 8,  7, 13, 14, 15, 16, 17, 18 ];
var bpath=[41, 40, 39, 38, 37, 48, 47, 46, 45, 44, 43, 49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 72, 2, 3, 4, 5, 6, 12, 11, 10, 9, 8,  7, 13, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 36, 35, 34, 33, 32, 31];
var rpath=[56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 72, 2, 3, 4, 5, 6, 12, 11, 10, 9, 8,  7, 13, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 42, 41, 40, 39, 38, 37, 48, 47, 46, 45, 44, 43, 49, 50, 51, 52, 53, 54];

var rp=[-1,-1,-1,-1];
var gp=[-1,-1,-1,-1];
var bp=[-1,-1,-1,-1];
var yp=[-1,-1,-1,-1];

    var gstate={ 'g1': -1,
                'g2': -1,
                'g3': -1,
                'g4': -1
            };
    var rstate={ 'r1': -1,
    'r2': -1,
    'r3': -1,
    'r4': -1
    };
    var bstate={ 'b1': -1,
    'b2': -1,
    'b3': -1,
    'b4': -1
    };
    var ystate={ 'y1': -1,
    'y2': -1,
    'y3': -1,
    'y4': -1
    };

var moves=[0,0,0,0];






//Dice roll fuction to get a random number

var posdice=0;


function diceRoll(current){
    var random=Math.floor(Math.random()*6+1);

     if(current === shadow){
        for(let i=1;i<=6;i++){
            if(i>random)
            {
                document.getElementById(id+i).style.display='none';
            }
            else{
                document.getElementById(id+i).style.display='block';
            }
            
        }

     }
     posdice= random;

            

}

// var ele=document.createElement('div');
// ele.id='g1';
// ele.classList.add("cir");
// ele.classList.add("g");
// ele.classList.add("bg-success");
// ele.onclick=move;





    function move(id,name){


        if(id === 'g'){
            if(gstate[name]=== -1 && posdice === 6){
                console.log("move clicked");
                console.log(gstate[name]);
        
                var item=document.getElementById(name);
                var item1=item;
                item.remove();
                var pos;
                    pos=gpath[0];
                    document.getElementById('c-'+pos).appendChild(item1);
                    gstate[name]=0;
                }
                else if(gstate[name]=== -1){

                }
                else{
                    console.log(posdice);
                    var pos=gstate[name]+posdice;
                    var item=document.getElementById(name);
                    var item1=item;
                    var newPos=gpath[pos];
                    item1.remove();
                document.getElementById('c-'+newPos).appendChild(item1);
                gstate[name]=pos;
                    console.log(gstate[name]);
                    posdice=0;

                }
            }
            else if (id ==='b'){

                if(bstate[name] === -1 && posdice === 6){
                    var item=document.getElementById(name);
                var item1=item;
                item.remove();
                var pos;
                    pos=bpath[0];
                document.getElementById('c-'+pos).appendChild(item1);
                bstate[name]=0;

                }else if(bstate[name]=== -1){
                    
                }
                else{
                    console.log(posdice);
                var pos=bstate[name]+posdice;
                    var item=document.getElementById(name);
                    var item1=item;
                    var newPos=bpath[pos];
                    item1.remove();
                    document.getElementById('c-'+newPos).appendChild(item1);
                    bstate[name]=pos;
                    console.log(bstate[name]);
                    posdice=0;

                }

                
            }
            else if (id ==='r'){

                if(rstate[name] === -1 && posdice === 6){
                    var item=document.getElementById(name);
                var item1=item;
                item.remove();
                var pos;
                    pos=rpath[0];
                    document.getElementById('c-'+pos).appendChild(item1);
                    rstate[name]=0;

                }
                else if(rstate[name]=== -1){
                    
                }
                else{

                    console.log(posdice);
                var pos=rstate[name]+posdice;
                    var item=document.getElementById(name);
                    var item1=item;
                    var newPos=rpath[pos];
                    item1.remove();
                document.getElementById('c-'+newPos).appendChild(item1);
                rstate[name]=pos;
                    console.log(rstate[name]);
                    posdice=0;

                }
            }
            else if (id ==='y'){

                if(ystate[name] === -1 && posdice === 6){
                    var item=document.getElementById(name);
                var item1=item;
                item.remove();
                var pos;
                    pos=ypath[0];
                document.getElementById('c-'+pos).appendChild(item1);
                ystate[name]=0;

                }else if(ystate[name]=== -1){
                    
                }
                else{

                    console.log(posdice);
                var pos=ystate[name]+posdice;
                    var item=document.getElementById(name);
                    var item1=item;
                    var newPos=ypath[pos];
                    item1.remove();
                document.getElementById('c-'+newPos).appendChild(item1);
                ystate[name]=pos;
                    console.log(ystate[name]);
                    posdice=0;

                }

                
            }
        
    }



// Fucntion to change the shadow on dice container accroding to the active user
let shadow='din-g';
let diceNo=0;
function changeShadow(shadow){
    document.getElementById(shadow).style.boxShadow="5px 5px 20px red ";
}
changeShadow(shadow);

let id='dotg-';
function changeActive(current){

    if(current === shadow){

        var random=Math.floor(Math.random()*6+1);

        
        if(random ===6 ){
            move(random);
        }
        else{

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
        
            }
        

        }
    
    
    
    
};


