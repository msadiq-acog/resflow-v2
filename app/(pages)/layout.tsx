import { ModernLayout } from "@/components/modern-layout";
import { ProtectedRoute } from "@/components/protected-route";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <ModernLayout>
        {children}
      </ModernLayout>
    </ProtectedRoute>
  );
}
