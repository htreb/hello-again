export type ImageType =
  | 'Astronaut'
  | 'Earth'
  | 'Moon'
  | 'Spaceship'
  | 'Planet'
  | 'Alien';

export type ImagePosition = {
  src: string;
  width: number;
  movement: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  rotate?: number;
  zIndex?: number;
  fixed?: boolean;
};

export const ImgData: Record<ImageType, ImagePosition> = {
  Astronaut: {
    src: '/images/astronaut.png',
    width: 45,
    right: 0,
    bottom: 0,
    movement: 0,
    zIndex: 1,
    fixed: true
  },
  Earth: {
    src: '/images/earth.png',
    width: 40,
    right: 15,
    top: 50,
    movement: 0.7
  },
  Moon: {
    src: '/images/moon.png',
    width: 10,
    left: 25,
    top: 30,
    movement: 0.7,
    rotate: 1,
    zIndex: -1
  },
  Spaceship: {
    src: '/images/spaceship.png',
    width: 8,
    bottom: 30,
    left: 20,
    movement: 0.5,
    rotate: 1
  },
  Planet: {
    src: '/images/planet.png',
    width: 10,
    left: 6,
    top: 10,
    movement: 0.8,
    rotate: 0.5
  },
  Alien: {
    src: '/images/alien.png',
    width: 6,
    left: 15,
    bottom: -20,
    movement: 0.4,
    rotate: 6
  }
};
