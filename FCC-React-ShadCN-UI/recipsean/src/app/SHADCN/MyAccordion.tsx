import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function MyAccordion() {
  return (
<div className='w-[400px] p-4'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Seans A Team Accordion</AccordionTrigger>
    <AccordionContent>
      Testing the Dropdown component, my first ShadCN component, This is very cool, 
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Seans B Team</AccordionTrigger>
    <AccordionContent>
      Sean Team 6(RIP) - CARTHAGO DELENDA EST - Ceterum (autem) censeo Carthaginem esse delendam ("Furthermore, I consider Carthage to need to be destroyed") - Based Cato
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
  )
}

export default MyAccordion