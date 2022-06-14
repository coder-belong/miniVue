
const info = {counter: 100};

function doubleCounter() {
  console.log(info.counter * 2);
}

doubleCounter();

info.counter++;  // 当info.counter发生变化时，我们希望自动更新依赖的函数
doubleCounter();  
