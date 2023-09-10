import xlsx, { IJsonSheet } from "json-as-xlsx"
import getPaymentData from "@/actions/getPayments"

export async function downloadToExcel() {
  const data = await getPaymentData()

  let columns: IJsonSheet[] = [
    {
      sheet: "Persons",
      columns: [
        { label: "Provider", value: "provider" },
        { label: "Customer", value: "customer" },
        { label: "ICCID", value: "iccid" },
        { label: "IMEI", value: "imei" },
        { label: "IP Address", value: "ip" },
        { label: "MAC Address", value: "mac" },
        { label: "License Status", value: "license" },
        { label: "Device Mfg", value: "mfg" },
        { label: "ICCID Mfg", value: "status" },
        { label: "Last Connect", value: "lastconnect" },
      ],
      content: data,
    },
  ]

  let settings = {
    fileName: "Device_Management_Inventory_Excel",
  }

  xlsx(columns, settings)
}
