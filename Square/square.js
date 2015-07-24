/**
 * Created by Dev on 24-07-2015.
 */

var gl;
var points;

window.onload = function init() {
    var canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }

    // four vertices

    var vertices = [
        -0.5, -0.5,
        -0.5, 0.5,
        0.5, 0.5,
        0.5, -0.5
    ];

    // alternate var vertices = [vec2(-0.5, -0.5), vec2(-0.5, 0.5), vec2(0.5, 0.5), vec2(0.5, 0.5)];
}
