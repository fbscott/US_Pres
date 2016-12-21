USPresidents.PresidentsTableView = Marionette.CollectionView.extend({
    tagName : 'table',

    childView : USPresidents.PresidentItemView
    // childView : USPresidents.PresidentCompositeView

});
