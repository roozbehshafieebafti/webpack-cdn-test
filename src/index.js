import $ from 'jquery';
import _ from 'lodash';
const isOdd = require('is-odd');


if(isOdd(23)){
    $('#hello').html('nice boy 5')
    console.log(_.head([1, 2, 3]));
    let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

        let fel = _.first(words);
        let lel = _.last(words);

        console.log(`First element: ${fel}`);
        console.log(`Last element: ${lel}`);
}

$('#nice').html('hello from CDN');