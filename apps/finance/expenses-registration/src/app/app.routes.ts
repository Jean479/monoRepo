import { ActivatedRouteSnapshot, ResolveFn, Route, RouterStateSnapshot, TitleStrategy } from '@angular/router';
//import { ExpensesApprovalPageComponent } from './pages/expenses-approval-page/expenses-approval-page.component';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import ExpensesApprovalPageComponent from './pages/expenses-approval-page/expenses-approval-page.component';

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Expenses App - ${title}`);
    }
  }
}

export const titleResolver: ResolveFn<string> =
  (route: ActivatedRouteSnapshot) =>
    route.routeConfig?.path?.replace('-', ' ') ?? '';

export const appRoutes: Route[] = [
    { path: 'expenses-overview', loadComponent: () => import('./pages/expenses-overview-page/expenses-overview-page.component'), title: titleResolver },
    { path: 'expenses-approval', loadComponent: () => import('./pages/expenses-approval-page/expenses-approval-page.component'), title: titleResolver },
    //{ path: 'expenses-overview', component: ExpensesOverviewPageComponent, title: titleResolver },
    // { path: 'expenses-approval', component: ExpensesApprovalPageComponent, title: titleResolver },
    { path: '', pathMatch: 'full', redirectTo: '/expenses-overview'}
  ];
