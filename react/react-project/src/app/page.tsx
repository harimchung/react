"use client";
import styles from "./page.module.css";
import React from "react";
import { Card, CardList } from "@/components";




export default function Home() {
  const [counter, setCounter] = React.useState<number>(0);
  const hanldeCounter = () => {
    setCounter(counter + 1);

  }

      const cards = [{
        title: "Card 1", description: "This is the first card."
    }, {
        title: "Card 2", description: "This is the second card."    
    },  {
        title: "Card 3", description: "This is the third card.", children: <button onClick={() => alert('Button inside card clicked!')}>Click Me</button>    
    }]
  return (
    <div className={styles.page}>
      <button onClick={hanldeCounter}>Click me!</button>
      <h1>Counter: {counter}</h1>
      
      <Card title="Card Title" description="This is a description of the card."/>
      <Card title="Card with Children" description="This card has children elements.">
        <p>This is a child paragraph inside the card.</p>
        <button onClick={() => alert('Button inside card clicked!')}>Click Me</button>
      </Card>

      <CardList cards={cards}/>
    </div>
  );
}
