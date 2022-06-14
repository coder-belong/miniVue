# miniVue
🏄‍♂️探索Vue3底层原理，实现 Vue3 中的核心三大模块：渲染系统模块、可响应式系统模块、应用程序入口模块


事实上Vue的源码包含三大核心： 

- Compiler模块：编译模板系统； 
- Runtime模块：也可以称之为Renderer模块，真正渲染的模块； 
- Reactivity模块：响应式系统；


这里我们实现一个简洁版的Mini-Vue框架，该Vue包括三个模块： 

- 渲染系统模块； 
  - 功能一：h函数，用于返回一个VNode对象； 
  - 功能二：mount函数，用于将VNode挂载到DOM上； 
  - 功能三：patch函数，用于对两个VNode进行对比，决定如何处理新的VNode (diff算法)；
- 可响应式系统模块； 
- 应用程序入口模块；
