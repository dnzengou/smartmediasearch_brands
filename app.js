//var client = algoliasearch("N637HXAMBS", "e0f889ef9198d699ed7577646820ea12")
var search = instantsearch({
    appId: 'N637HXAMBS',
    apiKey: 'e0f889ef9198d699ed7577646820ea12',
    indexName: 'records',
    urlSync: true,
    searchParameters: {
        hitsPerPage: 10
    }
});

search.addWidget(
    instantsearch.widgets.searchbox({
        container: '#search-input'
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: document.getElementById('hit-template').innerHTML,
            empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
        }
    })
);

search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination'
    })
);

search.start();

/*var index = client.initIndex('media_items');
var myAutocomplete = autocomplete('#search-input', {
    hint: false,
    debug: true
}, [{
    source: autocomplete.sources.hits(index, {
        hitsPerPage: 5
    }),
    displayKey: 'title',
    templates: {
        suggestion: function(suggestion) {
            var sugTemplate = "<img src='" + suggestion.image + "'/><span>" + suggestion._highlightResult.title.value + "</span>"
            return sugTemplate;
        }
    }
}]).on('autocomplete:selected', function(event, suggestion, dataset) {
    console.log(suggestion, dataset);
});

document.querySelector(".searchbox [type='reset']").addEventListener("click", function() {
    document.querySelector(".aa-input").focus();
    this.classList.add("hide");
    myAutocomplete.autocomplete.setVal("");
});

document.querySelector("#search-input").addEventListener("keyup", function() {
    var searchbox = document.querySelector(".aa-input");
    var reset = document.querySelector(".searchbox [type='reset']");
    if (searchbox.value.length === 0) {
        reset.classList.add("hide");
    } else {
        reset.classList.remove('hide');
    }
});*/