import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "antd";
import { Checkbox, Input } from "@/components";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isChecked, hasIsChecked] = React.useState(true);
  return (
    <div>
      <Button type={"primary"}>Button</Button>
      <Checkbox
        checked={isChecked}
        onChange={() => hasIsChecked((prev) => !prev)}
      />
      <Input label={"아이디"} />
    </div>
  );
}
