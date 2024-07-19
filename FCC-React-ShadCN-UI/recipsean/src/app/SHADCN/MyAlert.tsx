import React from 'react'
import { AlertCircle } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

function MyAlert() {
  return (
    <div className="w-[400px] p-4">
            <Alert variant="destructive"> {/* TO CHANGE VARIANT, INTELLISENSE OR SWITCH To variant="default ON THIS LINE*/}
    {/* TO CHANGE THE ICON, GO TO 'https://lucide.dev/icons/' and select a new one REPLACE 'ALERTCIRCLE' BELOW TO CHANGE ICON, 
    NOTICE THE IMPORTS AT TOP '"from lucide-react"', that is where you can get new icons, and change them, simply change/add import  */ }
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error-Alert</AlertTitle>
      <AlertDescription>
        TO CHANGE THE ICON, GO TO 'https://lucide.dev/icons/' AND IMPORT A NEW ONE, REPLACE THE 'AlertCircle' Above here
      </AlertDescription>
    </Alert>
    </div>
  )
}

export default MyAlert