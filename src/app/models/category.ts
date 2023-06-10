export class CreateCategoryReq {
  name!: string;
  image!: string;
}

export class Category {
  id!: string;
  name!: string;
  image!: string;
  companies!: CategoryCompany[];
}

export class CategoryCompany {
  id!: string;
  name!: string;
  description!: string;
  image!: string;
}