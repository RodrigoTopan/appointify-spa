import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Company } from 'src/app/models/company';
import { CategoriesService } from 'src/app/services/categories.service';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoria!: Category;
  companies!: Company[];

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.getCategoryData();
  }

  getCategoryData() {
    const categoryId = this.route.snapshot.paramMap.get('id') as string;
    console.log(categoryId)

    this.categoriesService.getCategoryById(categoryId).subscribe({
      next: res => {
        this.categoria = res;
        console.log(this.categoria);
      }
    });
  }
}
