// sidebar 
const menuitems = document.querySelectorAll('.menu-items');

// messages


const messagesNotification = document.querySelector('#Messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messagesearch = document.querySelector('#message-search');


// remove active class from all items 
const changeActiveItem = () => {
    menuitems.forEach(item => {
        item.classList.remove('active');
    });
};



menuitems.forEach( item => {

    item.addEventListener('click', () => {
        changeActiveItem ();
        item.classList.add('active');


if(item.id != 'notifications'){
    document.querySelector('.notifications-popup');
     style.display = 'none';
}
else{
    document.querySelector('.notifications-popup');
    style.display ='block';
    document.querySelector('.notification-count').style.display ='none'
}
    
    });
});

// messages 
    messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = ` 0 0 1rem var(--color-primary)`;
    messagesNotification.querySelector('.notification-count').style.display ='none'
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);
})


// search chat  
const searchMessage = () => {
    const val = messagesearch.value.toLowerCase(); 
    console.log(val);
    
    message.forEach( user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val)  !=  -1){
            user.style.display ='flex'
            
        }
        else{
            user.style.display= 'none'
        }
        
        
    });
    
}
// search chat in seach bar 

messagesearch.addEventListener('keyup', messagesearch);


// theme starts here 

const theme = document.querySelector('#theme');
const ThemeModal = document.querySelector('.customize-theme');
const fontsize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorpallete=document.querySelectorAll('.choose-color span');

// close the modal
closethemodal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        ThemeModal.style.display ='none';
    }
} 


// opne the modal 
const openthememodal = () => {
    ThemeModal.style.display ='grid';

} 

// close modal 

ThemeModal.addEventListener('click',closethemodal);
theme.addEventListener('click', openthememodal); 



// font sizes function 

fontsize.forEach(size => {
    let fontsize;

   size.addEventListener('click', () => {
    if(style.classList.contains('font-size-1')){
        fontsize = '10px';
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','5.4rem');
    }
    else if(style.classList.contains('font-size-2')){
        fontsize ='12px';
        root.style.setProperty('--sticky-top-left','5.4rem')
        root.style.setProperty('--sticky-top-right','-7rem')
        
    }
    else if(style.classList.contains('font-size-3')){
        fontsize ='14px';
        root.style.setProperty('--sticky-top-left','-2rem')
        root.style.setProperty('--sticky-top-right','-17rem')
    }
    else if(style.classList.contains('font-size-4')){
        fontsize ='16px';
        root.style.setProperty('--sticky-top-left','-5rem')
        root.style.setProperty('--sticky-top-right','-25rem')
    }
    else if(style.classList.contains('font-size-5')){
        fontsize ='20px';
        root.style.setProperty('--sticky-top-left','-12rem')
        root.style.setProperty('--sticky-top-right','-35rem')
    }

    
    
    // chnage font size in roort html Element 
    document.querySelector('html').style.fontsize = fontsize;
});
    
});



// chnage primary colors here 
 colorpallete.forEach(color => {
    color.addEventListener('click' ,() => {
        if(color.classList.contains('color-1')){

            primaryhue=252;
        }
       else if(color.classList.contains('color-2')){
        primaryhue=52;
       }
       else if(color.classList.contains('color-3')){
        primaryhue=352;
       }
       else if(color.classList.contains('color-4')){
        primaryhue=152;
       }
       else if(color.classList.contains('color-5')){
        primaryhue=202;
       }

       color.classList.add('active');

       root.style.setProperty('--primary-color-hue',primaryhue);
    });
    
 });

//  background starts from here 
const bg1 =document.querySelector('.bg-1');
const bg2 =document.querySelector('.bg-2');
const bg3 =document.querySelector('.bg-3');


// background theme starts here 
let lightcolorlightness;
let whitecolorlightness;
let darkcolorlightness;


// function changebg 

const changebg = () => {
    root.style.setProperty('--light-color-lightness',lightcolorlightness);
    root.style.setProperty('--white-color-lightness',whitecolorlightness);
    root.style.setProperty('--dark-color-lightness',darkcolorlightness);
}
bg1.addEventListener( 'click',() => {
    
   bg1.classList.add(`active`);
   
   bg3.classList.remove(`active`);
   bg2.classList.remove(`active`);
  
   window.location.reload();

});

bg2.addEventListener( 'click',() => {
    lightcolorlightness='95%';
    whitecolorlightness='20%';
    darkcolorlightness  ='15%';


   
   bg1.classList.add(`active`);
   
   bg3.classList.remove(`active`);
   bg2.classList.remove(`active`);
   changebg();

});
bg3.addEventListener( 'click',() => {
    lightcolorlightness='95%';
    whitecolorlightness='20%';
    darkcolorlightness  ='0%';

   bg1.classList.add(`active`);
   
   bg3.classList.remove(`active`);
   bg2.classList.remove(`active`);
   changebg();

});
