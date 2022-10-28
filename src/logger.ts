const customLogger =
  (consoleLog: Function) =>
  (...args: any[]) => {
    let arg;
    const container = document.getElementById('logger');
    consoleLog(...args);

    for (let i = 2; i < args.length; i++) {
      let output = '';
      arg = args[i];
      output += '<span class="log-' + typeof arg + i + '">';

      if (
        typeof arg === 'object' &&
        typeof JSON === 'object' &&
        typeof JSON.stringify === 'function'
      ) {
        output += JSON.stringify(arg);
      } else {
        output += arg;
      }

      container && (container.innerHTML += output + '<br>');
    }
  };

export { customLogger };
