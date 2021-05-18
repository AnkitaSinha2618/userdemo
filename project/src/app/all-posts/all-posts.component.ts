import { Component, OnInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {PostServiceService} from '../appServices/post-service.service';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DeleteConfirmDialogComponent} from '../delete-confirm-dialog/delete-confirm-dialog.component';


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  public dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'userId', 'title','body','update','delete'];

  constructor(private _service: PostServiceService, private router: Router,public dialog: MatDialog,private _snackBar: MatSnackBar) { }
  // public posts: any = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    //Getting all Post list data
    this._service.getPostList().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   })
 }
 openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action,{duration:3000});    
}



    // Navigating to update page for update based on id
 update(id: number) {
   this.router.navigate(['posts/update/' + id]);
 }

 //Deleteting data based on id
 delete(id: number) {
  const dialogRef = this.dialog.open(DeleteConfirmDialogComponent,{
    width:"350px",
    data:id
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result)
    {
      this._service.deletePost(id).subscribe((data: any) => {
        this.openSnackBar("User Deleted Successfully","Delete");
      });
    }
  });
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
