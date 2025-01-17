import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { memo, useEffect, useRef, useState } from "react";

let childCount = 0;

const ChildMemo = ({ data }) => {
  //   const [childCount, setCount] = useState(0);
  console.log("i am run after parent re render", childCount++);

  return (
    <div>
      <Card className="text-center">
        <CardHeader>
          <CardTitle>{data.name} </CardTitle>
          <CardDescription>{data.email}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default memo(ChildMemo);
