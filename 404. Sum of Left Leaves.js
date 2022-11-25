var sumOfLeftLeaves = function(root) {
    if(!root) return 0; const { left, right } = root;
    
    let [sumLeft, sumRight] = [sumOfLeftLeaves(left), sumOfLeftLeaves(right)];
    
    if(!sumLeft && left && !left.left && !left.right) sumLeft = left.val;
    
    return Number(sumLeft) + Number(sumRight);
};