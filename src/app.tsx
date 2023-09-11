import { ThemeProvider } from "@/components/theme-provider"
import { DeviceManagement } from "@/device-management/deviceManagement"

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <DeviceManagement />
    </ThemeProvider>
  )
}
