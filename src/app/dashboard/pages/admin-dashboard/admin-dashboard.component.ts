import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dummyData = [
    {email: "email@email1.com", loginTime: new Date(), logoutTime: new Date()},
    {email: "email@email2.com", loginTime: new Date(), logoutTime: new Date()},
    {email: "email@email3.com", loginTime: new Date(), logoutTime: new Date()},
  ];

  sortedData;
  displayedColumns: string[] = ['email', 'loginTime', 'logoutTime'];
  data:MatTableDataSource<any>;
  constructor() { 
    this.data = new MatTableDataSource(this.dummyData);
  }

  ngOnInit(): void {
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
  }

}
