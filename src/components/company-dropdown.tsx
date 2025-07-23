"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function CompanyDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center font-bold space-x-1 text-gray-700 hover:text-red-500 cursor-pointer">
          <span>Company</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 p-2 bg-white border-none" align="start">
        <Link href="/About" target="_blank" rel="noopener noreferrer">
        <DropdownMenuItem className="cursor-pointer  hover:bg-white p-3 text-gray-700 hover:text-blue-600">
          About Us
        </DropdownMenuItem>
        </Link>
        <Link href="/Features" target="_blank" rel="noopener noreferrer">
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 p-3 text-gray-700 hover:text-blue-600">
          Features
        </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
