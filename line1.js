document.write("canvas: ");
if (Modernizr.canvas) {
    document.write("yes");
} else {
    document.write("no");
}
document.write(" canvastext: ");
if (Modernizr.canvastext) {
    document.write("yes");
} else {
    document.write("no");
}
document.write(" video: ");
if (Modernizr.video) {
    if (Modernizr.video.ogg) {
        document.write("Ogg");
    } else if (Modernizr.video.h264) {
        document.write("H.264");
    } else {
        document.write("unknown");
    }
} else {
    document.write("no");
}
document.write(" localstorage: ");
if (Modernizr.localstorage) {
    document.write("yes");
} else {
    document.write("no");
}
document.write(" webworkers: ");
if (Modernizr.webworkers) {
    document.write("yes");
} else {
    document.write("no");
}
document.write(" applicationcache: ");
if (Modernizr.applicationcache) {
    document.write("yes");
} else {
    document.write("no");
}
document.write(" geolocation: ");
if (Modernizr.geolocation) {
    document.write("yes");
} else {
    document.write("no");
}