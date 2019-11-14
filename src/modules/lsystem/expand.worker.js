import { expand } from 'modules/lsystem/functions';

onmessage = (e) => {
  const type = e.data.type;
  const value = e.data.value;

  switch (type) {
    case 'RUN':
      postMessage(expand(
        value.rules,
        value.axiom,
        value.iterations,
      ));

      break;
    case 'CLOSE':
      close();
      break;
    default:
      break;
  }
}
