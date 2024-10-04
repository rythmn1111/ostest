import React, { useState } from "react";
import WindowStructure from "@/components/window";
import Image from "next/image";

interface TestingAppProps {
  id: number;
}

export default function TestingApp({ id }: TestingAppProps) {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    counterValue: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    button: {
      padding: '0.5rem 1rem',
      margin: '0.5rem',
      fontSize: '1.2rem',
      cursor: 'pointer',
    },
  };
  return <>
    {/* <Image src="/report.png" alt="Logo" width={800} height={500} style={{marginLeft:"200px",marginTop:"100px"}} /> */}
    <WindowStructure windowId={id}>
    <div style={styles.container}>
      <h1 style={styles.counterValue}>{count}</h1>
      <div>
        <button style={styles.button} onClick={increment}>Increment</button>
        <button style={styles.button} onClick={decrement}>Decrement</button>
        <button style={styles.button} onClick={reset}>Reset</button>
      </div>
    </div>
    </WindowStructure>
</>
}