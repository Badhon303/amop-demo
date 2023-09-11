import { Device, columns } from "@/device-management/columns"
import { DataTable } from "@/device-management/data-table"
import { useEffect, useState } from "preact/compat"
import getDeviceData from "@/actions/getDevicesData"

export function DeviceManagement() {
  const [data, setData] = useState<Device[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDeviceData()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div className="mx-10 mt-5">
      <h1 className="text-3xl font-bold mb-5">Device Management inventory</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
