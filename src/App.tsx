import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from 'antd';
interface Song {
  id: number;
  name?: string;
}
const songs: Song[] = [
  { id: 1, name: "爷爷泡的茶" },
  { id: 2 },
  { id: 3, name: "Things you said" },
];

// 函数组件
interface LiconProps {
  name?: string;
  value: string | null;
  handleClick: () => void;
  key?: string | number;
}

function Licon({ name, value, handleClick }: LiconProps) {
  return (
    <>
    <li onClick={handleClick}>
      {name}
      {value}
    </li>
    <Button type="primary">Button</Button>
    </>
  );
}

// App 组件
function App() {
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <div className="app">
      <h2>hello React</h2>
      <ul>
        {songs.map((item) => (
          <Licon
            key={item.id}
            name={item.name}
            value={value}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;