import { ThemeProvider } from "@/components/theme-provider"
import { DeviceManagement } from "@/device-management/device-management"

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <DeviceManagement />
    </ThemeProvider>
  )
}
