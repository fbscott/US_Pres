USPresidents.PresidentCollection = Backbone.Collection.extend({

    model : USPresidents.PresidentModel,

    // Sort alphabetically
    // comparator : function(sort) {
    //     return sort.get("lastName") + " " + sort.get("firstName");
    // }

    // Sort by id
    comparator : 'id'

});
