import React, { useEffect, useState } from "react";
function App() {
  const [country, setcountry] = useState({ name: "", country: "", value: "" });

  useEffect(() => {
    console.log("setcountry");
  }, [country]);

  const data = [
    {
      country: "United States",
      name: ["hello", "world"],
      value: "us",
    },
    {
      country: "india",
      name: ["heppp", "ind"],
      value: "in",
    },
    {
      country: " united kingdom Islands",
      name: ["king", "ing"],
      value: "uk",
    },
  ];

  return (
    <>
      <div className="m-20 p-10">
        <select
          value={country}
          onChange={(e) => {
            setcountry(e.target.value);
          }}
          className="border-[2px] border-black w-28"
        >
          {data.map((item, index) => (
            <option value={index} key={index}>
              {item.country}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => {
            setcountry(e.target.value);
          }}
          value={country}
          className="ml-10 border-[2px] border-black w-28"
        >
          {data.map((item, index) => (
            <option value={index} key={index}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default App;
