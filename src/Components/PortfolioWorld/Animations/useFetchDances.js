
function importAll(r) {
    return r.keys().map(r);
  }
  
  const dances = importAll(require.context("../../../assets/Animations/dance_animations", false, /\.(fbx)$/));

export default dances