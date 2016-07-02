const to2d = (elements, width) => {
  const assignPosition = (element, index) => (
    Object.assign(element, {
      position: {
        x: index % width,
        y: ~~(index / width)
      }
    })
  );

  return elements.map(assignPosition);
};

module.exports = to2d;
