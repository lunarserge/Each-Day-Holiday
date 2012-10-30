document.write("placeholder text: ");
if (Modernizr.input.placeholder) {
    document.write("yes");
} else {
    document.write("no");
}
document.write(" autofocus: ");
if (Modernizr.input.autofocus) {
    document.write("yes");
} else {
    document.write("no");
}