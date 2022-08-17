import { Component, OnInit } from '@angular/core';
import { Constants } from '@constants/constants';
import { ToolbarServiceService } from '@services/toolbar-service/toolbar-service.service';


@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: []
  
})
export class ListCompaniesComponent implements OnInit {

  constructor(private _toolbarService: ToolbarServiceService) { }

  ngOnInit(): void {

    this._toolbarService.setToolbarText(Constants.COMPANY_LIST);

  }
}
