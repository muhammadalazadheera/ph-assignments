import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell
} from "recharts";

function DocChart({ data, color }) {
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
         C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
         Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart width={200} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis tickCount={50} />
        <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
        <Bar label={{ position: "top" }} dataKey="fees" shape={<TriangleBar />}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getRandomHexColor()} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DocChart;
