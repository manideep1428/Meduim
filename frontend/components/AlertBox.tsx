import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"  
import { useState } from "react"

interface AlertBoxProps{
    show:boolean
    handleAlert:()=>void
}

export default function Alert({handleAlert ,show}:AlertBoxProps){
    return(
      <AlertDialog open={show}>
        <AlertDialogContent>
          <AlertDialogHeader>
          <AlertDialogTitle>This Feature Is Under Repair...</AlertDialogTitle>
          <AlertDialogDescription>
              This action is building by the developer. This will take time
              Please be patient and wait for the next update.
          </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
          <AlertDialogCancel onClick={handleAlert}>Ok</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>  
    )
}