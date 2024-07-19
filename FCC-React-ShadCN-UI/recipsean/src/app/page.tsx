import React from 'react'
import MyAccordion from './SHADCN/MyAccordion'
import MyAlert from './SHADCN/MyAlert'
import MyAlertDialog from './SHADCN/MyAlertDialog'

function page() {
  return (

    <div>
      <MyAccordion />
      <MyAlert />
      <MyAlertDialog text="Sean-AlertDialog" title="Sean-Title" content="Becomes Sean, Reuseable with props-Content" />
      <MyAlertDialog text="UnSean-Use Components in Typescript props" title="Sean-Title" content={ <MyAlert/> } />
      <MyAlertDialog text="UnSean-Use Components in Typescript props" title="Sean-Title" content={ <MyAccordion /> } />
    </div>
  )
}

export default page
