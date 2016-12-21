USPresidents.PresidentModel = Backbone.Model.extend({

    defaults : {
        middleName : '',
        terms      : '',
        vicePres_1 : {
            'firstName'  : 'N/A',
            'middleName' : '',
            'lastName'   : ''
        },
        vicePres_2 : {
            'firstName'  : '',
            'middleName' : '',
            'lastName'   : ''
        },
        vicePres_3 : {
            'firstName'  : '',
            'middleName' : '',
            'lastName'   : ''
        }
    }

});
