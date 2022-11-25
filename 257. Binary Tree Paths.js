const binaryTreePaths = (r) => {
    let p = [];
    function dfsTraversal(curPath, r) {
      if (r === null) {
        return;
      }
      if (r.left === null && r.right === null) {
        p.push([...curPath, r.val]);
        return;
      }
      dfsTraversal([...curPath, r.val], r.left);
      dfsTraversal([...curPath, r.val], r.right);
    }
    dfsTraversal([], r);
    return p.map(path => path.join("->"));
  };