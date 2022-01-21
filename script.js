var list = [
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
    'fri    day     night',
    'Could you not call my dad a piece of shit?',
    'Glass house, white Ferrari, live for New Year\'s Eve, Sloppy Steaks at Truffoni\'s. Big, rare cut of meat with water dumped all over it.',
    'Let him hold the baby. people can change.',
    'jizz',
    'I\'m not a piece of shit. I used to be.'

];

function random() {
    var quote = Math.floor(Math.random() * (list.length));
    document.getElementById('quoteDisplay').innerHTML = list[quote];
}