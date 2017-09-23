export default [
  {
    meta: {
      title: 'Koch curve',
    },
    lsystem: {
      iterations: 4,
      axiom: 'F',
      rules: [
        {
          symbol: 'F',
          successor: 'F+F-F-F+F',
        },
      ],
    },
    renderer: {
      type: 'RENDERER_2D',
      params: [
        {
          id: 'angle',
          value: 90,
        },
      ],
    },
  },
  {
    meta: {
      title: 'Dragon curve',
    },
    lsystem: {
      iterations: 11,
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
      type: 'RENDERER_2D',
      params: [
        {
          id: 'angle',
          value: 90,
        },
      ],
    },
  },
  {
    meta: {
      title: 'Hilbert curve',
    },
    lsystem: {
      iterations: 5,
      axiom: 'A',
      rules: [
        {
          symbol: 'A',
          successor: '-BF+AFA+FB-',
        },
        {
          symbol: 'B',
          successor: '+AF-BFB-FA+',
        },
      ],
    },
    renderer: {
      type: 'RENDERER_2D',
      params: [
        {
          id: 'angle',
          value: 90,
        },
      ],
    },
  },
  {
    meta: {
      title: 'Koch island',
    },
    lsystem: {
      iterations: 3,
      axiom: 'F-F-F-F',
      rules: [
        {
          symbol: 'F',
          successor: 'F-F+F+FF-F-F+F',
        },
      ],
    },
    renderer: {
      type: 'RENDERER_2D',
      params: [
        {
          id: 'angle',
          value: 90,
        },
      ],
    },
  },
  {
    meta: {
      title: 'Prickly square',
    },
    lsystem: {
      iterations: 4,
      axiom: 'F-F-F-F',
      rules: [
        {
          symbol: 'F',
          successor: 'FF-F--F-F',
        },
      ],
    },
    renderer: {
      type: 'RENDERER_2D',
      params: [
        {
          id: 'angle',
          value: 90,
        },
      ],
    },
  },
  {
    meta: {
      title: 'Branching',
    },
    lsystem: {
      iterations: 3,
      axiom: 'F-F-F-F',
      rules: [
        {
          symbol: 'F',
          successor: 'F[+F]F[-F]F',
        },
      ],
    },
    renderer: {
      type: 'RENDERER_2D',
      params: [
        {
          id: 'angle',
          value: 25,
        },
      ],
    },
  },
  {
    meta: {
      title: 'Islands and lakes',
    },
    lsystem: {
      iterations: 2,
      axiom: 'F+F+F+F',
      rules: [
        {
          symbol: 'F',
          successor: 'F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF',
        },
        {
          symbol: 'f',
          successor: 'ffffff',
        },
      ],
    },
    renderer: {
      type: 'RENDERER_2D',
      params: [
        {
          id: 'angle',
          value: 90,
        },
      ],
    },
  },
  {
    meta: {
      title: 'Iso-curve',
    },
    lsystem: {
      iterations: 4,
      axiom: 'F',
      rules: [
        {
          symbol: 'F',
          successor: 'F+G++G-F--FF-G+',
        },
        {
          symbol: 'G',
          successor: '-F+GG++G+F--F-G',
        },
      ],
    },
    renderer: {
      type: 'RENDERER_2D',
      params: [
        {
          id: 'angle',
          value: 60,
        },
      ],
    },
  },
  {
    meta: {
      title: 'Radio tower',
    },
    lsystem: {
      iterations: 8,
      axiom: 'X',
      rules: [
        {
          symbol: 'X',
          successor: 'F[+X][-X]FX',
        },
        {
          symbol: 'F',
          successor: 'FF',
        },
      ],
    },
    renderer: {
      type: 'RENDERER_2D',
      params: [
        {
          id: 'angle',
          value: 75,
        },
      ],
    },
  },
];
