console.log("ggg");


function configureDropDownLists(ddl1,ddl2) {
    var colours = ['','Main Hall', 'Room 101', 'Room 102'];
    var shapes = ['','Hall', 'Ballroom A', 'Ballroom B'];
    var names = ['','Room s10', 'Room s11', 'Room s12'];

    switch (ddl1.value) {
        case 'Colours':
            ddl2.options.length = 0;
            for (i = 0; i < colours.length; i++) {
                createOption(ddl2, colours[i], colours[i]);
            }
            break;
        case 'Shapes':
            ddl2.options.length = 0;
        for (i = 0; i < shapes.length; i++) {
            createOption(ddl2, shapes[i], shapes[i]);
            }
            break;
        case 'Names':
            ddl2.options.length = 0;
            for (i = 0; i < names.length; i++) {
                createOption(ddl2, names[i], names[i]);
            }
            break;
            default:
                ddl2.options.length = 0;
            break;
    }

}

    function createOption(ddl, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
        ddl.options.add(opt);
    }
