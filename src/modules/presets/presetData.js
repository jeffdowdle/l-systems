export default [
  {
    id: 'system-preset-01',
    meta: {
      title: 'Koch curve',
    },
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
    id: 'system-preset-02',
    meta: {
      title: 'Dragon curve',
    },
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
