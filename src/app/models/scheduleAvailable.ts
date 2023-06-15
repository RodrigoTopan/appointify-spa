export class ScheduleAvailable {
  schedule!: Schedule;
  service!: OfferedService;
  employee!: Employee;
  company!: Company;
}

export class Schedule {
  id!: string;
  startDate!: Date;
  endDate!: Date;
}

export class OfferedService {
  id!: string;
  image!: string;
  companyId!: string;
  name!: string;
  description!: string;
  price!: string;
}

export class Employee {
  id!: string;
  name!: string;
}

export class Company {
  id!: string;
  name!: string;
  governmentId!: string;
}

