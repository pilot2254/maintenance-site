import MaintenancePage from "@/components/maintenance-page"
import { config } from "@/lib/config"

export default function Home() {
  return <MaintenancePage endDate={config.maintenanceEndDate} />
}