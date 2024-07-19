import React from 'react'
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

function MyAlertDialog() {
  return (
    <div className="w-[400px] p-4">
        <AlertDialog>
  <AlertDialogTrigger>UnSean</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Becomes Sean!</AlertDialogTitle>
      <AlertDialogDescription>
        Remember VaxCattle, no refundz($cience juice paid for with taxes, lawsuits paid for with taxes, courts paid for with taxes, side effects paid for with taxes, non-compliant(smart) purged from every institutSean, are you starting to get it? )
        do you choose to get an experimental untested god knows what in you because TV, govt, big pharma all told you to?
        Proving to yourselves and your owners that you are a subcattle incapable of thinking for yourselves?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
  )
}

export default MyAlertDialog