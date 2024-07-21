import React from 'react'
import Image from "next/image"
 
import { AspectRatio } from "@/components/ui/aspect-ratio"

function MyAspectRatio() {
  return (
<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <Image width={450} height={200} src="https://plus.unsplash.com/premium_photo-1720475150788-8a168991fff1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
</div>
  )
}

export default MyAspectRatio