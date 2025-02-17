# pinia安装

----

**步骤 1：安装 Pinia**

在你的 Vue 项目中安装 Pinia，这是一个轻量级的状态管理库，用于 Vue 应用：

```bash
pnpm add pinia
```

-----

**步骤 2：在 `main.ts` 中注册 Pinia**

在你的项目入口文件 `main.ts` 中引入并注册 Pinia：

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // [!code focus]

const app = createApp(App);

app.use(createPinia()); // [!code focus]
app.mount('#app');
```

-----

**步骤 3：创建状态存储**

创建一个状态存储文件 `store/counter.ts`，并定义状态、计算属性和方法：

```ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

----

**步骤4：使用状态存储**

在你的 Vue 组件中，你可以使用在 Pinia 中定义的状态存储来管理状态。以下是如何在组件中使用 `counter` store 的示例：

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';

// 使用 Pinia store
const store = useCounterStore();

// 状态
const count = store.count;
// 计算属性
const doubleCount = store.doubleCount;
// 方法
function increment() {
  store.increment();
}
</script>
```

