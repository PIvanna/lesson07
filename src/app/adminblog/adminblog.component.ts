import { Component, OnInit } from '@angular/core';
import { IBlog, IBlogRequest, IBlogResponse } from '../shared/interfaces/blog.interface';
import { BlogService } from '../shared/services/blog/blog.service';

@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.scss']
})
export class AdminblogComponent implements OnInit {

  public inputTitle = '';
  public inputTextarea = '';
  public inputAuthor = '';
  public adminBlog!: IBlogResponse[];
  public editID!: number;
  public isColorTextarea = true;
  public isColorAuthor = true;
  public isColorTitle = true;
  public editStatus = false;

  constructor(
    private BlogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.BlogService.getAll().subscribe(data => {
      this.adminBlog = data;
    })
  }

  addBlog(): void {

    if (this.inputTitle !== '' && this.inputTextarea !== '' && this.inputAuthor !== '') {
      this.isColorTitle = true;
      this.isColorTextarea = true;
      this.isColorAuthor = true;
      const newBlog: IBlogRequest = {
        title: this.inputTitle,
        description: this.inputTextarea,
        author: this.inputAuthor
      }
      this.BlogService.create(newBlog).subscribe(() => {
        this.getBlogs();
      });
      this.inputTitle = '';
      this.inputTextarea = '';
      this.inputAuthor = ''
    }
    else {
      if (this.inputTitle == '') {
        this.isColorTitle = false;
      }
      else {
        this.isColorTitle = true;
      }
      if (this.inputTextarea == '') {
        this.isColorTextarea = false;
      }
      else {
        this.isColorTextarea = true;
      }
      if (this.inputAuthor == '') {
        this.isColorAuthor = false;
      }
      else {
        this.isColorAuthor = true;
      }
    }
  };

  editBlog(blog: IBlogResponse): void {
    this.inputTitle = blog.title;
    this.inputTextarea = blog.description;
    this.inputAuthor = blog.author;
    this.editID = blog.id;
    this.editStatus = true;
  }

  saveBlog(): void {
    if (this.inputTitle !== '' && this.inputTextarea !== '' && this.inputAuthor !== '') {
      this.isColorTitle = true;
      this.isColorTextarea = true;
      this.isColorAuthor = true;
      const updateBlog: IBlogRequest = {
        title: this.inputTitle,
        description: this.inputTextarea,
        author: this.inputAuthor
      }
      this.BlogService.update(updateBlog, this.editID).subscribe(() => {
        this.getBlogs();
      })
      this.inputTitle = '';
      this.inputTextarea = '';
      this.inputAuthor = '';
      this.editStatus = false;
    }
    else {
      if (this.inputTitle == '') {
        this.isColorTitle = false;
      }
      else {
        this.isColorTitle = true;
      }
      if (this.inputTextarea == '') {
        this.isColorTextarea = false;
      }
      else {
        this.isColorTextarea = true;
      }
      if (this.inputAuthor == '') {
        this.isColorAuthor = false;
      }
      else {
        this.isColorAuthor = true;
      }
    }

  }

  deleteBlog(blog: IBlogResponse): void {
    this.BlogService.delete(blog.id).subscribe(() => {
      this.getBlogs();
    })
  }
}











