export class CreateCategoryReq {
  name!: string;
  image!: string;
}

export class Category {
  id!: string;
  name!: string;
  image!: string;
  companies!: any[];
}