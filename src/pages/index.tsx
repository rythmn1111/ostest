import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import WindowStructure from "@/components/window";
import Desktop, {Playground} from "@/components/desktop";
import dynamic from 'next/dynamic';
import AppDirectory from "@/app_directory/app_directory";
import AppList from "@/apps/apps";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store' // Add this line to import RootState
import { openWindow, closeWindow, toggleWindow } from "@/redux/windowOpen/windowOpen";
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import MedicalRecordsApp from "@/apps/medical_records/medical_records_app";
import {WindowDeliver, A, TaskBarDeliver} from "@/kernel/kernel";
import {AppCollection, AppDetails, apps} from "@/kernel/kernelregistery";
import TestingApp from "@/apps/testingapp/testingapp";
const TaskBar = dynamic(() => import('@/components/desktop').then(mod => mod.TaskBar), {
  ssr: false
});

export default function Home() {
  const isOpen = useSelector((state: RootState) => state.windowOpen.value)
  const dispatch = useDispatch()
  const arr = [1, 2, 3, 4, 5]
  return (  
    <Desktop>
      <Playground>        
{/*        
      {isOpen ? (
          <MedicalRecordsApp />
        ) : (
          <div></div>
        )} 
        <WindowStructure windowId={8}>some</WindowStructure> */}
        <WindowDeliver></WindowDeliver>
        {/* <TestingApp></TestingApp> */}
      </Playground>
      <TaskBar>
        <AppDirectory />
        <AppList></AppList>
        <TaskBarDeliver></TaskBarDeliver>
      </TaskBar>
    </Desktop>

  );
}


