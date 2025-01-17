import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./components/ui/button";
import ParentMemo from "./components/hooks/useMemo/ParentMemo";

const App = () => {


  return (
    <div className="min-h-screen flex justify-center items-center">
      <ParentMemo />
    </div>
  );
};

export default App;
