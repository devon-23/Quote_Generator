var itysl = [
    'I\'LL KILL YOU',
    'I\'M DONE. DO WHAT YOU WANT. PULL THE PLUG',
    'dan flashes got a shirt TO-DAY that\'s $450',
    'who\'s a carve of beef who\'s your carved ham up here who\'s carved up',
    'do any of these fuckers ever blast out of the wall and have like a huge cumshot',
    'but it\'s lunch',
    'brenda was just sitting there slightly in his way towards the door and as he walked towards her he said move and right when he said it he realized he had gone too far',
    'I didn\'t do fuckin shit. I didn\'t rig shit',
    'they\'re sayin they want to drop corncob tv because we showed over 400 naked dead bodies on our show coffin flop',
    'slicked back hair, white bathing suit, sloppy steaks, white couch',
    'You think this is slicked back? This is pushed back',
    'I\'m worried the baby thinks that people can\'t change',
    'fri      day      night',
    'Could you not call my dad a piece of shit?',
    'Glass house, white Ferrari, live for New Year\'s Eve, Sloppy Steaks at Truffoni\'s. Big, rare cut of meat with water dumped all over it.',
    'Let him hold the baby. people can change.',
    'jizz',
    'I\'m not a piece of shit. I used to be.',
    'pat we know you\'re eating a hot dog',
    'I\'m saying big fat load of cum and horse cock and you\'re getting mad',
    'Dylan that looks really good. I should have got that',
    'I\'m jokin',
    'gimme dat',
    'Dylan, i\'m gonna eat the whole thing',
    'Are you gonna tell people that I housed Dylans burger?',
    'YOU SURE ABOUT THAT',
    'You might know him from his other job',
    'don\'t do the voice',
    'oh my god did you see brians hat',
    'it\'s a fedora with safari flaps in the back',
    'He looks so fucking stupid',
    'I think he has dice but he\'s too afraid to show anyone',
    'quit fuckin\' with em',
    'Nobody said shit dude, nobody said shit',
    'he said in a joking voice "who said that?"',
    'I made ALL my money off the big charlie brown',
    'I sued the city because I was accidentally sewed into the pants of the big charlie brown at the thanksgiving day parade',
    'TABLES',
    'heey, debbie, what\'s goin on, you wore that dress yesterday!',
    'I\'m SCARED about how much I need WINE',
    'sunday funday with these pig dicks',
    'SHUT THE FUCK UP DOUG I did though',
    'It\'s just me barbie, I\'m not the blues brothers',
    
];

var iasip = [
    'Any amount of cheese before a date is too much cheese',
    'Goddammit, Jack Bauer. You really are the man',
    'Oh, I get it. Cute. You leave this pen here and people are supposed to think, “Wait, that looks like a dick.”',
    'Well, I don\'t know how many years on this Earth I got left. I\'m gonna get real weird with it',
    'Here\'s a confession: I\'m in love with a man. What? I\'m in love with a man. A man called God. Does that make me gay? Am I gay for God? You betcha!',
    'Hello fellow American. This you should vote me. I leave power. Good. Thank you. Thank you. If you vote me, I\'m hot.” What? “Taxes. They\'ll be lower. Son. The democratic vote for me is right thing to do, Philadelphia. So do.',
    'Okay, well, “Charlie work” is like, you know, like basement stuff, cleaning urinals, uh, blood stuff, your basic slimes, your sludges, anything dead or decaying. You know, I\'m on it. I\'m dealing with it',
    'Wanna go get sweaty in the bathroom?',
    'What is this word, spa?',
    'Roxy, God bless you. You were a good whore. You serviced me like no other whore ever did. Not only my crank, but my heart. And...I\'m gonna miss ya. Amen.',
    'Cat in the wall, eh? Okay, now you\'re talking my language',
    'Oh, shit. Look at that door, dude. See that door right there? The one marked “pirate?” You think a pirate lives in there?',
    'Later boners',
    'I\'m a…full-on rapist, you know? Uh, Africans, dyslexics, children, that sort of thing',
    'Cause if the girl said “no,” then the answer obviously is “no.” But the thing is, is she\'s not gonna say “no.” She would never say “no,” because of the implication',
];

function ityslRandom() {
    var quote = Math.floor(Math.random() * (itysl.length));
    document.getElementById('quoteDisplay').innerHTML = itysl[quote];
}

function iasipRandom() {
    var quote = Math.floor(Math.random() * (iasip.length));
    document.getElementById('quoteDisplay').innerHTML = iasip[quote];
}