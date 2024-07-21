import React from 'react'
import MyAccordion from './SHADCN/MyAccordion'
import MyAlert from './SHADCN/MyAlert'
import MyAlertDialog from './SHADCN/MyAlertDialog'
import MyAspectRatio from './SHADCN/MyAspectRatio'

function page() {
  return (

    <div>
      <MyAccordion />
      <MyAlert />
      <MyAlertDialog text="Sean-AlertDialog" title="Sean-Title" content="Becomes Sean, Reuseable with props-Content" />
      <MyAlertDialog text="UnSean-Use Components in Typescript props" title="Sean-Title" content={ <MyAlert/> } />
      <MyAlertDialog text="UnSean-Use Components in Typescript props" title="Sean-Title" content={ <MyAccordion /> } />
      <MyAspectRatio />
    </div>
  )
}

export default page
