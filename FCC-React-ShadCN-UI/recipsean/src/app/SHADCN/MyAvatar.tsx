import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function MyAvatar() {
  return (
    <div>
        <Avatar className="w-20 h-20">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    </div>
  )
}

export default MyAvatar