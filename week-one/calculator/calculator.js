console.log('Welcome to my calculator project: WEEK ONE');

//functions
// conditionals (if-else statements)

// once you are done, open the terminal and run these commands

// git add .  (This saves the progress for github)

// git commit -m "week one project"  (brief description of your changes)

// git push   (Push changes to the web)
/*_ _ _ _ _ style.css _ _ _ _ _ */



// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: montserrat;

// }
// body {
//     min-height: 100hv;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     \
// }
// div{
//     text-align: center;
// }
// div h2{
//     letter-spacing: 3px ;
//     text-transfrom: uppercase ;
// }
// div hr{
//     margin: 14px 0;
// }
// div input [type=number] {
//     margin: 8px 0;
//     padding: 8px;
//     width: 100%
//     font-size: 16px;
// }


console.log('Welcome to my calculator project: WEEK ONE');



const num1 =document.getElementById('num1').innerText;
const num2 =document.getElementById('num2').innerText;



function add(){
    console.log('add function was called')
 return  document.getElementById('result').innerText=num1+num1
}
function sub(){
    console.log('sub function was called')

    return   document.getElementById('result').innerText=num1-num1
}
function divide(){
    console.log('divide function was called')

     return document.getElementById('result').innerText=num1/num1
}
function mult(){
    console.log('multiply function was called')

    return document.getElementById('result').innerText=num1*num1
}

