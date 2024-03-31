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

| Parameter                 | Type                             | Default    | Description                                                |
| ------------------------- | -------------------------------- | ---------- | ---------------------------------------------------------- |
| `number` (req)            | `num` or `str`                   | none       | Number to display (numeric or string)                      |
| `duration` (opt)          | `num`                            | 3          | Animation time in seconds. Default is 3 seconds.           |
| `startDelay` (opt)        | `num` or `ease-in` or `ease-out` | 0.1        | Start delay in seconds. Default is 0.1 seconds.            |
| `endDelay` (opt)          | `num` or `ease-in` or `ease-out` | 0.1        | Delay before stopping in seconds. Default is 0.1 seconds.  |
| `easeStartDuration` (opt) | `num`                            | Max(n/3,1) | Execution time of the ease function for ease-in/out.       |
| `easeEndDuration` (opt)   | `num`                            | Max(n/3,1) | Execution time of the ease function for ease-in/out.       |
| `reverse` (opt)           | `bool`                           | false      | Whether to start from the front or back. Default is false. |
| `style` (opt)             | `CSSProps`                       | none       | CSS styling (e.g., fontsize, fontweight, color).           |

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
