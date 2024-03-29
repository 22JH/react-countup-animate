# react-countup-animate

---

**Less dependencies** and **less sizes** and **easy to use**

# Demo

---

<img src="https://velog.velcdn.com/images/toitoii080/post/be05ab8c-34e2-440f-85fd-ecf6129db938/image.gif" width="50%" height="50%"/>

Click [here](https://stackblitz.com/edit/vitejs-vite-rcrxpi?file=src%2FApp.tsx,src%2Fmain.tsx&terminal=dev) to try demo

# How to use

---

**Installation**

```shell
npm isntall react-countup-animate
```

**Example Code**

```react
import Countup from "react-countup-animate";

function App() {
  return (
    <Countup number={160000} />
  );
}

export default App;

```

**Options**

| Parameter         | Type             | Default | Description                                                                                                     |
| ----------------- | ---------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| number (required) | number or string | none    | This is the number to display. You can use numeric or string types. The default is "1,234,567"                  |
| duration          | number           | 3       | The running time of the animation. You can enter the desired seconds in numeric type. The default is 3 seconds. |
| startDelay        | number           | 0.1     | This is the starting delay between numbers. The default is 0.1 seconds.                                         |
| endDelay          | number           | 0.1     | This is the delay before stopping between numbers. The default is 0.1 seconds.                                  |
| reverse           | boolean          | false   | This is a prop that determines whether to start from the front or the back. The default is false                |
| style             | CSSProperties    | none    | You can specify css. (e.g. fontsize, fontweight, color...)                                                      |
