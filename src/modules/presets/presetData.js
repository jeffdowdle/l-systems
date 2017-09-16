export default [
  {
    lsystem: {
      iterations: 3,
      axiom: 'F',
      rules: [
        {
          symbol: 'F',
          successor: 'F+F-F-F+F',
        },
      ],
    },
    renderer: {
      type: 'CANVAS_TURTLE',
      params: [
        {
          id: 'angle',
          value: 90,
        },
      ],
    },
  },
  {
    lsystem: {
      iterations: 8,
      axiom: 'FX',
      rules: [
        {
          symbol: 'X',
          successor: 'X+YF+',
        },
        {
          symbol: 'Y',
          successor: '-FX-Y',
        },
      ],
    },
    renderer: {
      type: 'CANVAS_TURTLE',
      params: [
        {
          id: 'angle',
          value: 90,
        },
      ],
    },
  },
];
