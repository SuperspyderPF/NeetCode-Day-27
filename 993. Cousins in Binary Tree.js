const findParentAndDepth = (curNode, value, curDepth = 0, parentValue) => {
    if (!curNode) return;
    if (curNode.val === value) return [curDepth, parentValue];
    return findParentAndDepth(curNode.left, value, curDepth + 1, curNode.val) || findParentAndDepth(curNode.right, value, curDepth + 1, curNode.val);
  };
  const isCousins = (root, x, y) => {
    const [xDepth, xParent] = findParentAndDepth(root, x);
    const [yDepth, yParent] = findParentAndDepth(root, y);
    return xDepth === yDepth && xParent !== yParent;
  };