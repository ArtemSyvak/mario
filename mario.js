



/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    let block = "#";
    let space =' ';
    for(let i=0;i<height;i++){
        console.log(space.repeat(height-i-1)+block+"#");
        block+="#";
    }
}
printPyramid(5);

function drawPyramid(height) {
    let pyramid = document.getElementById('pyramid');
    let block = "#";
    let space = '\xa0';
    let str = "";
    for(let i=0;i<height;i++){
        str += space.repeat(height-i-1)+block+"#\n";
        block+="#";
    }
    console.log(str);
    pyramid.innerText = str;
}
drawPyramid(5);
