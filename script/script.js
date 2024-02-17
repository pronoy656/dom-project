// console.log('connected')
let subhanAllahInitialValue = 0;
let alhamdulilahInitialValue = 0;
let allahuakbarInitialValue = 0;

document.getElementById('click-SubhanAllah-increment').addEventListener('click',function(){
   const takeDisplay = document.getElementById('subhanAllah-display');
   const innertext = takeDisplay.innerText;
   const convertInnertext = parseInt(innertext);
   subhanAllahInitialValue = subhanAllahInitialValue + 1;

   if(subhanAllahInitialValue === 33){

      return alert ('SUBHANALLAH-COMPLETE');
     }
   takeDisplay.innerText = subhanAllahInitialValue;
    })

document.getElementById('click-SubhanAllah-Decrement').addEventListener('click',function(){

    const takeDisplay = document.getElementById('subhanAllah-display');
    const innertext = takeDisplay.innerText;
    const convertInnertext = parseInt(innertext);
    subhanAllahInitialValue = subhanAllahInitialValue - 1;

    if(subhanAllahInitialValue < 0){
        return alert ('You Cannot Initialize Negative Value')
     }
    takeDisplay.innerText = subhanAllahInitialValue;
    })


// ---------------------ALHAMDULLIAH------------

document.getElementById('click-Alhamdulilah-increment').addEventListener('click',function(){
    const takeDisplay = document.getElementById('alhamdulilah-display');
    const innertext = takeDisplay.innerText;
    const convertInnertext = parseInt(innertext);
    alhamdulilahInitialValue = alhamdulilahInitialValue + 1;
 
    if(alhamdulilahInitialValue === 33){
 
       return alert ('Alhamdulilah-COMPLETE');
      }
    takeDisplay.innerText = alhamdulilahInitialValue;
     })
 
 document.getElementById('click-Alhamdulilah-Decrement').addEventListener('click',function(){
 
     const takeDisplay = document.getElementById('alhamdulilah-display');
     const innertext = takeDisplay.innerText;
     const convertInnertext = parseInt(innertext);
     alhamdulilahInitialValue = alhamdulilahInitialValue - 1;
 
     if(alhamdulilahInitialValue < 0){
         return alert ('You Cannot Initialize Negative Value')
      }
     takeDisplay.innerText = alhamdulilahInitialValue;
     })


    //  ------------------------Allahhukbar--------------


    document.getElementById('click-Allahuakbar-increment').addEventListener('click',function(){
        const takeDisplay = document.getElementById('allahuakbar-display');
        const innertext = takeDisplay.innerText;
        const convertInnertext = parseInt(innertext);
        allahuakbarInitialValue = allahuakbarInitialValue + 1;
     
        if(allahuakbarInitialValue === 33){
     
           return alert ('Allahuakbar-COMPLETE');
          }
        takeDisplay.innerText =allahuakbarInitialValue;
         })
     
     document.getElementById('click-Allahuakbar-Decrement').addEventListener('click',function(){
     
         const takeDisplay = document.getElementById('allahuakbar-display');
         const innertext = takeDisplay.innerText;
         const convertInnertext = parseInt(innertext);
         allahuakbarInitialValue= allahuakbarInitialValue - 1;
     
         if(allahuakbarInitialValue < 0){
             return alert ('You Cannot Initialize Negative Value')
          }
         takeDisplay.innerText = allahuakbarInitialValue;
         })


        //  ------------reset button-------------


     document.getElementById('reset').addEventListener('click',function(){
        const takeDisplay = document.getElementById('subhanAllah-display');
        const take1Display = document.getElementById('subhanAllah-display');
        const take2Display = document.getElementById('alhamdulilah-display');
        const take3Display = document.getElementById('alhamdulilah-display');
        const take4Display = document.getElementById('allahuakbar-display');
        const take5Display = document.getElementById('allahuakbar-display');
        takeDisplay.innerText = 0
        take1Display.innerText = 0
        take2Display.innerText = 0
        take3Display.innerText = 0
        take4Display.innerText = 0
        take5Display.innerText = 0
       
     })