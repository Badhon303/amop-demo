import { Payment, columns } from "@/payment/columns"
import { DataTable } from "@/payment/data-table"
import { useEffect, useState } from "preact/compat"
import getPaymentData from "@/actions/getPayments"

export function App() {
  const [data, setData] = useState<Payment[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPaymentData()
      console.log("data: ", data)
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-10">Device Management inventory</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
