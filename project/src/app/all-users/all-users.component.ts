import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../appServices/user-service.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DeleteConfirmDialogComponent} from '../delete-confirm-dialog/delete-confirm-dialog.component';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username','email','address',
  'phone','website','company','update','delete'];
  public dataSource = new MatTableDataSource();
  panelOpenState = false;
  constructor(private _service: UserServiceService, private router: Router,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    //Getting all user list data
    this._service.getUserList().subscribe((data: any) => {
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
    this.router.navigate(['users/update/' + id]);
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
        this._service.deleteUser(id).subscribe((data: any) => {
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
