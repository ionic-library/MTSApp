import { Injectable } from '@angular/core';

import { Report } from '../../models/mockEiReport';

@Injectable()
export class Reports {
  reports: Report[] = [];

  constructor() {
    let reports = [
      {
        "dateRange": "Week 21/22 Report",
        "dueDate": "Due Tomorrow",
        "status": "new"
      },
      {
        "dateRange": "Week 19/20 Report",
        "dueDate": "Saturday July 1, 2018",
        "status": "Submitted"
      },
      {
        "dateRange": "Week 17/18 Report",
        "dueDate": "Saturday June 24, 2018",
        "status": "Approved"
      }
    ];

    for (let report of reports) {
      this.reports.push(new Report(report));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.reports;
    }

    return this.reports.filter((report) => {
      for (let key in params) {
        let field = report[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return report;
        } else if (field == params[key]) {
          return report;
        }
      }
      return null;
    });
  }
}
