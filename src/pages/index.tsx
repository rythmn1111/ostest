import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import WindowStructure from "@/components/window";
import Desktop, {Playground} from "@/components/desktop";
import dynamic from 'next/dynamic';
import AppDirectory from "@/app_directory/app_directory";

const TaskBar = dynamic(() => import('@/components/desktop').then(mod => mod.TaskBar), {
  ssr: false
});

export default function Home() {
  
  return (
    <Desktop>
      <Playground>
        <div></div>
      </Playground>
      <TaskBar>
        <AppDirectory />
      </TaskBar>
    </Desktop>
  );
}


