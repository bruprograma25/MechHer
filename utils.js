export function createPageUrl(name) {
  const routes = {
    Dashboard: "/",
    MyVehicles: "/myvehicles",
    MaintenanceHistory: "/maintenance",
    Alerts: "/alerts",
    Workshops: "/workshops",
    BudgetComparison: "/budgets",
    EducationalContent: "/educational",
  };
  return routes[name] || "/";
}
