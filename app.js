function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

  
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["Blank", 
"\"Es ist nicht Deine Schuld, dass die Welt ist wie sie ist. Es wär' nur Deine Schuld, wenn sie so bleibt.\"<br>-  Die Ärzte", 
"\"Wir dürfen nicht hoffen, eine bessere Welt zu erbauen, ehe nicht die Individuen besser werden. In diesem Sinn soll jeder von uns an seiner eigenen Vervollkommnung arbeiten, indem er auf sich nimmt, was ihm im Lebensganzen der Menschheit an Verantwortlichkeit zukommt, und sich seiner Pflicht bewusst bleibt, denen zu helfen, denen er am ehesten nützlich sein kann\"<br> - Marie Curie", 
"\"Den Guten nenne ich glücklich. Wer aber Unrecht tut, den nenne ich unglücklich.\"<br>- Sokrates", 
"\"Alle Menschen streben von Natur aus nach Wissen.\"<br>- Aristoteles", 
"\"Die größte Wohltat, die man einem Menschen erweisen kann, besteht darin, dass man ihn vom Irrtum zur Wahrheit führt.\"<br>- Thomas von Aquin", 
"\"Denn es ist nicht genug, einen guten Kopf zu haben; die Hauptsache ist, ihn richtig anzuwenden.\"<br>- René Descartes", 
"\"Es ist so bequem, unmündig zu sein. Habe ich ein Buch, das für mich Verstand hat, einen Seelsorger, der für mich Gewissen hat, einen Arzt der für mich die Diät beurtheilt ... so brauche ich mich ja nicht selbst zu bemühen.\"<br>- Immanuel Kant", 
"\"Weisheit ist eine Tugend des Alters, und sie kommt wohl nur zu denen, die in ihrer Jugend weder weise waren noch besonnen.\"<br>- Hannah Arendt",
"\"Wer a sagt, der muß nicht b sagen. Er kann auch erkennen, daß a falsch war.\"<br>- Bertolt Brecht",
"\"Kein Mensch hat das Recht zu gehorchen.\"<br>- Hannah Arendt",
"\"Wer a sagt, der muß nicht b sagen. Er kann auch erkennen, daß a falsch war.\"<br>- Bertolt Brecht",
"\"Je ungebildeter ein Mensch, je schneller ist er mit einer Ausrede fertig.\"<br>- Marie von Ebner-Eschenbach",
"\"Es ist von größter Wichtigkeit, dass wir lernen, über uns selbst zu lachen.\"<br>- Katherine Mansfield",
"\"Lernen, ohne zu denken, ist eitel, denken, ohne zu lernen, ist gefährlich.\"<br>- Konfuzius"
];

//date
function startDate() {
  var d = new Date();
  var days = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+d.getDate()+"/"+[d.getMonth()+1]+"/"+d.getFullYear();
}
