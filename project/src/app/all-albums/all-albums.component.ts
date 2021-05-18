import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {AlbumServiceService} from '../appServices/album-service.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DeleteConfirmDialogComponent} from '../delete-confirm-dialog/delete-confirm-dialog.component';


@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.scss']
})
export class AllAlbumsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userId', 'title','update','delete'];
  public dataSource = new MatTableDataSource();
  constructor(private _service: AlbumServiceService, private router: Router,public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  // public albums: any = [];


  ngOnInit(): void {
     //Getting all album list data
     this._service.getAlbumList().subscribe((data: any) => {
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
    this.router.navigate(['albums/update/' + id]);
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
        this._service.deleteAlbum(id).subscribe((data: any) => {
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
