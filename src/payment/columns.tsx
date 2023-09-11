import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  provider: string
  customer: string
  iccid: number
  imei: number
  ip: string
  mac: string
  license: string
  mfg: string
  status: "Active" | "Suspended" | "Deactive"
  lastconnect: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "provider",
    header: "Provider",
    cell: ({ row }) => {
      const provider = row.getValue("provider") as string
      return <img src={provider} alt="atnt" className="w-16 h-8" />
    },
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "iccid",
    header: "ICCID",
  },
  {
    accessorKey: "imei",
    header: "IMEI",
  },
  {
    accessorKey: "ip",
    header: "IP Address",
  },
  {
    accessorKey: "mac",
    header: "MAC Address",
  },
  {
    accessorKey: "license",
    header: "License Status",
    cell: ({ row }) => {
      const license = row.getValue("license") as string
      return (
        <div className="flex justify-center">
          <div
            className={`w-6 h-6 rounded-full ${
              license === "red"
                ? "bg-red-500"
                : license === "green"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          ></div>
        </div>
      )
    },
  },
  {
    accessorKey: "mfg",
    header: "Device Mfg",
    cell: ({ row }) => {
      const mfg = row.getValue("mfg") as string
      return <img src={mfg} alt="atnt" className="w-16 h-8" />
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "lastconnect",
    // header: "Last Connect",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Connect
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  // {
  //   accessorKey: "amount",
  //   // header: "Amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"))
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount)

  //     return <div className="text-right font-medium">{formatted}</div>
  //   },
  // },
  {
    accessorKey: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy Device ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Archive Device</DropdownMenuItem>
            <DropdownMenuItem>Provision Device</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
