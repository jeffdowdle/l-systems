export const CommandTypes = {
  DRAW_FORWARD: 'DRAW_FORWARD',
  MOVE_FORWARD: 'MOVE_FORWARD',
  TURN_LEFT: 'TURN_LEFT',
  TURN_RIGHT: 'TURN_RIGHT',
  PITCH_DOWN: 'PITCH_DOWN',
  PITCH_UP: 'PITCH_UP',
  ROLL_LEFT: 'ROLL_LEFT',
  ROLL_RIGHT: 'ROLL_RIGHT',
  TURN_AROUND: 'TURN_AROUND',
  PUSH: 'PUSH',
  POP: 'POP',
};

export default [
  {
    id: CommandTypes.DRAW_FORWARD,
    label: 'Draw forward',
    defaultSymbols: ['F', 'G', 'H', 'I', 'J'],
  },
  {
    id: CommandTypes.MOVE_FORWARD,
    label: 'Move forward',
    defaultSymbols: ['f', 'g', 'h', 'i', 'j'],
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
    id: CommandTypes.PITCH_DOWN,
    label: 'Pitch down',
    defaultSymbols: ['&'],
  },
  {
    id: CommandTypes.PITCH_UP,
    label: 'Pitch up',
    defaultSymbols: ['^'],
  },
  {
    id: CommandTypes.ROLL_LEFT,
    label: 'Roll left',
    defaultSymbols: ['\\'],
  },
  {
    id: CommandTypes.ROLL_RIGHT,
    label: 'Roll right',
    defaultSymbols: ['/'],
  },
  {
    id: CommandTypes.TURN_AROUND,
    label: 'Turn around',
    defaultSymbols: ['|'],
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
