// _.extend(USPresidents, {

//     initializeApp: function() {
//         TemplateLoader.init();
//     }
// });

// USPresidents.initializeApp();

USPresidents.on('start', function() {
    TemplateLoader.init();
    // TemplateLoader.init('[type="text/html"]', 'srcTmpl');
    var usPresidents = new USPresidents.PresidentCollection(USPresidents.PresidentsJSON);

    // Use for 6_structuring-code-with-modules.html
    // var usPresListView = new USPresidents.PresidentsTableView({
    // Use for 6a_composite-view.html
    var usPresListView = new USPresidents.PresidentCompositeView({
      collection : usPresidents
    });

    USPresidents.mainRegion.show(usPresListView);
});

$(document).ready(function(){

    USPresidents.start();

});
