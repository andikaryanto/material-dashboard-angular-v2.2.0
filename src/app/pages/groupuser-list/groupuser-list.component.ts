import { Component, OnInit } from '@angular/core';
import m_groupusers from '../../models/m_groupusers';
import { MGroupusersService } from 'app/services/m-groupusers.service';
// import * as $ from 'jquery';
// import 'datatables.net'

@Component({
  selector: 'app-groupuser-list',
  templateUrl: './groupuser-list.component.html',
  styleUrls: ['./groupuser-list.component.scss']
})
export class GroupuserListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  m_groupusers : m_groupusers[];

  constructor(private groupuserService : MGroupusersService) { }

  ngOnInit() {
    // this.dtOptions = {
    //   pagingType: 'full_numbers'
    // };

    this.groupuserService
      .getGroupusers()
      .subscribe((data: m_groupusers[]) => {
        this.m_groupusers = data;
        console.log(this.m_groupusers);
    });
  }

  add(){
    
  }

}
