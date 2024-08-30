import { AdminDashboardService } from "../services/admin-dashboard.service";
import { DashboardService } from "../services/dashboard.service";
import { UserService } from "../services/user.service";

export const DashboardServiceFactory = (userService: UserService) => {
  console.log('DashboardServiceFactory isAdmin:', userService.isAdmin)
  return userService.isAdmin ?  new AdminDashboardService() :  new DashboardService();
}