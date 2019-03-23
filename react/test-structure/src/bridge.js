export class Bridge {
  constructor() {
    this.listeners = [];
  }

  register(code, handler) {
    this.listeners.push({ code, handler });
  }

  execute({ code, payload }) {
    this.listeners.some(listener => {
      if (code === listener.code) listener.handler(payload);
      return code === listener.code;
    });
  }
}
