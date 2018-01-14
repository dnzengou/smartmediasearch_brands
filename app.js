var $input = $('input');
var $brand = $('#brand');


$(document).ready(function() {
    var client = algoliasearch('N637HXAMBS', 'e0f889ef9198d699ed7577646820ea12');
    var index = client.initIndex('records');

    $input.keyup(function() {
        index.search($input.val(), {
            hitsPerPage: 10,
            facets: '*'
        }, searchCallback);
    }).focus();
});

function searchCallback(err, content) {
    if (err) {
        console.error(err);
        return;
    }

    $brand.empty();

    for (var i = 0; i < content.hits.length; i++) {
        $brand.append('<li>' + content.hits[i].name + ' | ' + '<i>' + content.hits[i].price + '$' + ', ' + ' </i>' + 'rating ' + content.hits[i].rating + '</li>');
    }
};