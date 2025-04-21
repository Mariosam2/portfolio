const config = {
  mass: 1,
  tension: 200,
  friction: 10,
};

const transformToCss = (x, y) => {
  return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`;
};

const calc = (x, y, rect) => {
  const buffer = 80;
  return [
    -(y - rect.top - rect.height / 2) / buffer,
    (x - rect.left - rect.width / 2) / buffer,
  ];
};

export { config, transformToCss, calc };
