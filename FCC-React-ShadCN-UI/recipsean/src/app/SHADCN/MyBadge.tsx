import React from 'react'
import { Badge } from "@/components/ui/badge"


function MyBadge({title, className, variant} : {title: string, className?: string, variant?: "default" | "secondary" | "destructive" | "outline"} ) {
  return (
        <Badge className={className} variant={variant}>{title}</Badge>
  )
}

export default MyBadge