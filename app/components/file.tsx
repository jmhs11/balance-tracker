"use client";

import { parse } from "papaparse";
import { useState } from "react";

const FileInput = () => {
  const [data, setData] = useState<any[]>([]);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    parse(file, {
      complete(results, file) {
        console.log("Parsing complete:", results, file);
        setData(results.data)
      },
    });
  };

  return <input type="file" onChange={handleChangeFile} />;
};

export default FileInput;
