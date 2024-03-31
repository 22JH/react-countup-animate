# react-countup-animate

**Less dependencies** and **less sizes** and **easy to use**

# Demo

![](https://velog.velcdn.com/images/toitoii080/post/abbfcd96-0c9d-4a1a-9de5-33354c264e56/image.gif)

Click [here](https://stackblitz.com/edit/vitejs-vite-rcrxpi?file=src%2FApp.tsx,src%2Fmain.tsx&terminal=dev) to try demo

# How to use

**Installation**

```shell
npm isntall react-countup-animate
```

**Example Code**

```js
import Countup from "react-countup-animate";

function App() {
  return (
    <Countup number={160000} />
    // <Countup number={"160,000"} reverse={true} />
    // <Countup number={123456} startDelay={0.5} endDelay={1} reverse={true} />
  );
}

export default App;
```

# Options

| Parameter                     | Type                                     | Default                        | Description                                                                                                     |
| ----------------------------- | ---------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `number` (required)           | `number` or `string`                     | none                           | This is the number to display. You can use numeric or string types. The default is "1,234,567"                  |
| `duration`(optional)          | `number`                                 | 3                              | The running time of the animation. You can enter the desired seconds in numeric type. The default is 3 seconds. |
| `startDelay` (optional)       | `number`  or `"ease-in"` or `"ease-out"` | 0.1                            | This is the starting delay between numbers. The default is 0.1 seconds.                                         |
| `endDelay` (optional)         | `number`  or `"ease-in"` or `"ease-out"` | 0.1                            | This is the delay before stopping between numbers. The default is 0.1 seconds.                                  |
| `easeStartDuration`(optional) | `number`                                 | `Math.max(number.length/3, 1)` | If you select the ease-in or ease-out options, you can set the total execution time of the ease function.       |
| `easeEndDuration`             | `number`                                 | `Math.max(number.length/3, 1)` | If you select the ease-in or ease-out options, you can set the total execution time of the ease function.       |
| `reverse`(optional)           | `boolean`                                | false                          | This is a prop that determines whether to start from the front or the back. The default is false                |
| `style`(optional)             | `CSSProperties`                          | none                           | You can specify css. (e.g. fontsize, fontweight, color...)                                                      |

# More Example

```js
<CountUp startDelay="ease-out" endDelay="ease-in" />
```

![](https://velog.velcdn.com/images/toitoii080/post/def429de-5773-42ad-a48b-8a4f3656c2ba/image.gif)

```js
<CountUp StartDelay="ease-out" endDelay="ease-in" easeStartDuration={1.5} />
```

![](https://firebasestorage.googleapis.com/v0/b/myblog-3f34c.appspot.com/o/post%2F1711878176776.webp?alt=media&token=098a8827-e003-490b-a6ba-7d58c8af4989)

```js
<CountUp startDelay="0.1" endDelay="ease-out" reverse={true} />
```

![](https://velog.velcdn.com/images/toitoii080/post/9df88be0-1c91-49cb-bbc0-ec7b754873dd/image.gif)
