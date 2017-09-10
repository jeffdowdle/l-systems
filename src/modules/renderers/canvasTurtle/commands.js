export const CommandTypes = {
  DRAW_FORWARD: 'DRAW_FORWARD',
  TURN_LEFT: 'TURN_LEFT',
  TURN_RIGHT: 'TURN_RIGHT',
  PUSH: 'PUSH',
  POP: 'POP',
};

export default [
  {
    id: CommandTypes.DRAW_FORWARD,
    label: 'Draw forward',
    defaultSymbols: ['F'],
  },
  {
    id: CommandTypes.TURN_LEFT,
    label: 'Turn left',
    defaultSymbols: ['+'],
  },
  {
    id: CommandTypes.TURN_RIGHT,
    label: 'Turn right',
    defaultSymbols: ['-'],
  },
  {
    id: CommandTypes.PUSH,
    label: 'Push',
    defaultSymbols: ['['],
  },
  {
    id: CommandTypes.POP,
    label: 'Pop',
    defaultSymbols: [']'],
  },
];
