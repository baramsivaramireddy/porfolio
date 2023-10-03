// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Switch} from "@nextui-org/react";
import {SunIcon} from "@/components/ui/accests/SunIcon";
import {MoonIcon} from "@/components/ui/accests/MoonIcon"
export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
const [isSelected,setIsSelected] = useState(true);
  useEffect(() => {
    setMounted(true)
  }, [])


  useEffect(()=>{
    if(isSelected){
       
        setTheme('dark')
    }
    else{
        setTheme('light')
    }
  } ,[theme,isSelected])
  if(!mounted) return null

  return (
    <div>
        <Switch
      defaultSelected
      isSelected={isSelected} onValueChange={setIsSelected}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
    </Switch>
  
    
     
    </div>
  )
};