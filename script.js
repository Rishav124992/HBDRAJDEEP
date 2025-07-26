let text = "Hello brother I heared that today is your birthday. I know this day is special for you. I hope you have a great time celebrating with your loved ones! I have created a special surprise for you. You can click on the button to see the gift."
let text_1 = document.querySelector('.txt_cnt');
let i = 0;
let speed = 30;
let typewriter = () => {
    if (i < text.length){
        text_1.innerHTML += text.charAt(i);
        i++
        setTimeout(typewriter, speed);

    }
}
setTimeout(typewriter,8000);


let button = document.querySelector('.button');
let show_element = document.querySelector('.page_box');
show_element.style.display = 'none';

let show = () => {
    if(show_element.style.display === 'none' ){
       show_element.style.display = 'block';
        right_text.innerHTML = ""; // clear previous message
        j = 0; // reset typewriter index

        // start typewriter animation after short delay (e.g. 1s)
        setTimeout(right_typewriter, 1500);
        right_text_2.innerHTML = "";
        k = 0;
        setTimeout(right_typewriter2, 20000);
    }
    else{
       show_element.style.display = 'none';
    }
}
button.addEventListener('click', show);

let right_text = document.querySelector('.message');
let text_right = "Happy Birthday, my brother! From childhood days of laughter and chaos to grown-up talks and dreams, we've walked this journey together. I’m beyond blessed to have you by my side through all the ups and downs.On this special 29th of July, I pray your heart stays full, your path stays bright, and your smile never fades. May this year bring you endless joy, success, and unforgettable memories. You're not just my best friend—you’re my family.";
let j = 0;
let right_speed = 30;
let right_typewriter = () => {
    if (j < text_right.length){
        right_text.innerHTML += text_right.charAt(j);
        j++
        setTimeout(right_typewriter, right_speed);
    }
}
right_typewriter();


let right_text_2 = document.querySelector('.right_message2');
let text_right2 = "No matter where life takes us, the bond we share is unbreakable. We've built countless memories together, and I know many more are waiting for us. Always stay the amazing soul you are—because the world needs more hearts like yours.On your special day, I just want to remind you how much you mean to me. You’ve stood by me like a brother, and for that, I’ll always be grateful. Happy Birthday, my forever friend—may life bless you in every possible way.";
let k = 0;
let right_speed2 = 30;
let right_typewriter2 = () => {
    if(k < text_right2.length) {
        right_text_2.innerHTML += text_right2.charAt(k);
        k++
        setTimeout(right_typewriter2, right_speed2);
    }
}
right_typewriter2();

let close_button = document.querySelector('.button_close');
let close = () => {
    show_element.style.display = 'none';
}
close_button.addEventListener('click', close);