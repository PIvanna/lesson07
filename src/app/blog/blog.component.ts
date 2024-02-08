import { Component, OnInit } from '@angular/core';
import { IBlogResponse } from '../shared/interfaces/blog.interface';
import { BlogService } from '../shared/services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public userBlog: Array<IBlogResponse> = [];

  constructor(
    private BlogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.BlogService.getAll().subscribe(data => {
      this.userBlog = data;
    })
  }

}