export interface Button {
  strokeColor: Colors;
  fontColor: Colors;
  color: Colors;
  hoverColor: Colors;
  path: string;
}

export enum Colors {
  WHITE = 'white',
  BLACK = 'black',
  LILAC = '#D5B6F1',
  LAVENDER = '#B87FEC',
  LIGHT_BLUE = '#F8F8FA',
}
