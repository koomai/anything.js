// Can I grow my moustache in all its glory yet?

var isItMovember = function () {
    var month = (new Date()).getMonth();
    if (month === '10') {
        return 'Yes';
    } else {
        return 'No';
    }
};

anything.prototype.isItMovember = isItMovember;
