let sec = document.querySelector(".section");
let vid = document.querySelector(".vid");
let btn = document.querySelector(".btn");
let btnGo = document.querySelector(".go");
let btnBack = document.querySelector(".btnback");
let btnBack2 = document.querySelector(".btnback2");
let btnSaveImage = document.querySelector(".btnSaveImage");
let valTex = document.querySelector(".val");
let injaz = document.querySelector(".Injaz");
let war = document.querySelector(".warning");
let count = 0 ;
let btnSave = document.querySelector(".btnSave");
let sPage = document.querySelector(".sPage");
let btnSpage = document.querySelector(".btnSpage");
let ListInjaz = document.querySelector(".ListInjaz");
let dateToday = document.querySelector(".dateToday");
let msgForu = document.querySelector(".msgForu");
let today = new Date();

window.onload = function(){
    valTex.focus();
}
function addInjaz(){
    if(valTex.value ===''){
        alert("ضروري تكتب إنجاز  أولًا")
    }
    else {
        count++;
            let li = document.createElement("li");
            let li2 = document.createElement("li");
            li.innerHTML= valTex.value + ` -`;
            li2.innerHTML= valTex.value + ` -`;
             injaz.appendChild(li);
             ListInjaz.appendChild(li2);
            valTex.value='';
            valTex.focus();


    }

}



btn.addEventListener("click",()=>{
    if(count==0){
        war.style.display="block";
        valTex.addEventListener("click",()=>{
        war.style.display="none";
        

        })
    }
    else{
        sec.style.display="none";
        vid.style.display="block";
        valTex.value=" ";

    }


});
btnBack.addEventListener("click",()=>{
sec.style.display="block";
vid.style.display="none";
war.style.display="none";
sPage.style.display="none";
btnSpage.style.display="none";
location.reload();



});
btnBack2.addEventListener("click",()=>{
    
sec.style.display="block";
vid.style.display="none";
war.style.display="none";
sPage.style.display="none"
btnSpage.style.display="none"
// injaz.style.display="none"
location.reload();


});
btnSaveImage.addEventListener("click",()=>{
    let containerInjaz = document.querySelector(".sPage");
    
   html2canvas(containerInjaz, { backgroundColor: '#222327', scale: 4 }).then(canvas => {
        const link = document.createElement('a');
        const imgData = canvas.toDataURL("image/jpeg", 4.0);
        link.href = imgData;
        link.download = "achievements.jpg";
        link.click();
    });

})
btnSave.addEventListener("click",()=>{

    sec.style.display="none";
    vid.style.display="none";
    sPage.style.display="block";
    btnSpage.style.display="block";

});

function randomMsg(){

    let msgArray = [
        "استمر في المحاولة، فالنجاح يأتي لمن لا يستسلم",
    "كل يوم هو فرصة جديدة لتصبح أفضل",
    "لا تخف من الفشل، فهو جزء من رحلة النجاح",
    "ضع أهدافك نصب عينيك واعمل بجد لتحقيقها",
    "أنت أقوى مما تعتقد، ثق بنفسك وانطلق!",
    "التغيير يبدأ بخطوة صغيرة، لا تتردد في اتخاذها",
    "اصنع مستقبلك بنفسك، فالأحلام لا تتحقق بالانتظار",
    "التحديات هي فرص للتعلم والتطور، لا تخف منها",
    "كل إنجاز عظيم بدأ بفكرة بسيطة وإصرار قوي",
    "لا تقارن نفسك بالآخرين، ركّز على تقدمك الشخصي",
    "المثابرة هي مفتاح النجاح، لا تيأس أبداً",
    "ابتسم، فالإيجابية تجلب لك فرصاً لم تكن تتوقعها",
    "اجعل شغفك دليلك، وستصل إلى ما تحلم به",
    "الحياة مليئة بالفرص، اغتنمها ولا تخف من التجربة",
    "كل خطوة صغيرة تقربك من هدفك، لا تقلل من شأن أي إنجاز",
    "النجاح ليس وجهة، بل هو رحلة مستمرة من التعلم والنمو",
    "لا تنتظر اللحظة المثالية، ابدأ الآن بما تملك",
    "الإصرار والعزيمة هما سلاحك لتجاوز العقبات",
    "لا شيء مستحيل مع الإرادة القوية والعقل المتفتح",
    "عندما تؤمن بنفسك، يصبح كل شيء ممكناً",
    "الأحلام تتحقق لمن يعمل بجد ويؤمن بقدراته",
    "كن فخوراً بكل إنجاز تحققه مهما كان صغيراً",
    "التقدم البطيء لا بأس به، المهم ألا تتوقف",
    "اجعل كل يوم خطوة نحو مستقبلك المشرق",
    "ثقتك بنفسك هي مفتاحك لفتح أبواب النجاح",
    "كل تحدٍ تواجهه اليوم يجعلك أقوى غداً",
    "الأفكار العظيمة تبدأ من الشجاعة على المحاولة",
    "الحياة تمنح الفرص لمن يبحث عنها، كن مستعداً دائماً",
    "اصنع نجاحك بيديك، فالحلم بدون عمل مجرد خيال"

    ];
        let n = Math.floor(Math.random()*msgArray.length);
        console.log(msgArray[n]);
        console.log(n);

        msgForu.innerHTML=msgArray[n];
        
    }
    

dateToday.innerHTML = today.toLocaleDateString() + '  ' + ' ';
randomMsg();
