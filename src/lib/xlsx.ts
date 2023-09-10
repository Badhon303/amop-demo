import xlsx, { IJsonSheet } from "json-as-xlsx"
import getPaymentData from "@/actions/getPayments"

export async function downloadToExcel() {
  const data = await getPaymentData()

  let columns: IJsonSheet[] = [
    {
      sheet: "Persons",
      columns: [
        { label: "payment ID", value: "id" },
        { label: "Amount", value: "amount" },
        { label: "Status", value: "status" },
        { label: "Email", value: "email" },
      ],
      content: data,
    },
  ]

  let settings = {
    fileName: "Payment Excel",
  }

  xlsx(columns, settings)
}
