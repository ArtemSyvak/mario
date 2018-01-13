



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