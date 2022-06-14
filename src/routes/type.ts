export type ScheduleNavigationProps = {
    name: string;
  }

declare global {
namespace ReactNavigation {
    interface RootParamList {
    home: undefined;
    clients:undefined;
    more:undefined;
    TabRoutes: undefined;
    Services: undefined;
    FormSchedule: ScheduleNavigationProps;
    FormServices: undefined;
    FormClients: undefined;
    }
}