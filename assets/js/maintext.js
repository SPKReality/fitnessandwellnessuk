var i = 1; 
const title = document.getElementById("maintext");
var texts = [
    "“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali",
    "“The body achieves what the mind believes.” – Napoleon Hill",
    "“The real workout starts when you want to stop.” – Ronnie Coleman",
    "“Take care of your body. It’s the only place you have to live.” — Jim Rohn",
    "“I’ve failed over and over again in my life and that is why I succeed.” – Michael Jordan",
    "“The secret of getting ahead is getting started.” — Mark Twain",
    "“Most people fail, not because of lack of desire, but, because of lack of commitment.” –Vince Lombardi",
    "“If something stands between you and your success, move it. Never be denied.” – Dwayne “The Rock” Johnson",
    "“You miss 100% of the shots you dont shoot” - “Zidan”",
    "“Obession and hard work beats talent everytime” - “Nathan”"
];

title.textContent = texts[0];

var loop = setInterval(function() {
    title.textContent = texts[i];
    i = (i+1) % texts.length;
}, 7000);