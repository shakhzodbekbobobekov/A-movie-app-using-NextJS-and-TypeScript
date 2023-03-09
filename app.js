//! ENUM
var Dictionary;
(function (Dictionary) {
    Dictionary[Dictionary["Rus"] = 0] = "Rus";
    Dictionary[Dictionary["Uzb"] = 1] = "Uzb";
    Dictionary[Dictionary["Eng"] = 2] = "Eng";
})(Dictionary || (Dictionary = {}));
var uzbIndex = Dictionary.Uzb;
var uzb = Dictionary[uzbIndex];
console.log(uzb);
