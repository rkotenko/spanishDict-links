// Right now, finds one particular class on the dictionary page for 
// english words only.  If I go to an spanish word page, words are not
// links because the english words use a different class.  This will
// be a next step

// Also, not every word on the page uses the same class.  I have to 
// research the DOM more to determine what other classes to use

// get all the elements with class of 
// dictionary-neodict-translation-translation

var palabras = $('.dictionary-neodict-translation-translation, .def');

palabras.each(function() {
    var palabra,
        articulo,
        wordSpan = $(this);
    // check for a space.  This probably means there is an el or la
    // we only want to have the word since el or la are not part of 
    // api url
    // there is a space in the front. trim it.
    var parts = wordSpan.text().trim().split(' ');

    // for the moment, I am only going to concern myself with the ones
    // that are 1 or 2 words long.  Sometimes a longer phrase can appear
    // but these phrases do not have direct api entries
    if(parts.length == 1) {
        palabra = parts[0];
    } else if(parts.length == 2) {
        // check if the first part is el or la.  If not, then it is
        // the actual word
        if(parts[0] == 'el' || parts[0] == 'la') {
            palabra = parts[1];
            articulo = parts[0];
        } else {
            palabra = parts[0];
        }
    } else {
        return;
    }

    // empty and append an anchor
    var a = $('<a href="' + palabra + '"> ' + wordSpan.text() + '</a>');
    a.css({
        "color": "blue",
        "text-decoration": 'underline'
    });

    wordSpan.empty().append(a);
});

