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
    let space =height-1;
    for(let i=2;i<height+2;i++){
        console.log((" ").repeat(space--)+block.repeat(i));
    }
}
printPyramid(5);

function drawPyramid(height) {
    let pyramid = document.getElementById('pyramid');
    let count = height-1;
    let space = "<i>&nbsp;</i>";
    let block = "<div id='block'></div>";
    for(let i=2;i<height+2;i++){
    pyramid.innerHTML+="<div>"+space.repeat(count--)+block.repeat(i)+"</div>"+"<h6>";
    }
}
drawPyramid(8);
