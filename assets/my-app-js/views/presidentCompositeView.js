USPresidents.PresidentCompositeView = Marionette.CompositeView.extend({
    tagName   : 'table',
    className : 'table table-hover',

    // template  : '#president-table-headers',
    initialize : function(options) {
        this.template = TemplateLoader.get('#president-table-headers');
    },

    childView          : USPresidents.PresidentItemView,
    childViewContainer : 'tbody'
});
