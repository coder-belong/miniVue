class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  addEffect(effect) {
    // 收集依赖
    this.subscribers.add(effect);
  }

  notify() {
    // 依次调用依赖
    this.subscribers.forEach(effect => {
      effect();
    })
  }
}

const info = {counter: 100};

const dep = new Dep();

function doubleCounter() {
  console.log(info.counter * 2);
}

function powerCounter() {
  console.log(info.counter * info.counter);
}

dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

info.counter++;
dep.notify();
