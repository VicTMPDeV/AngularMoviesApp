import { Component, OnInit } from '@angular/core';
import { Constants } from '@constants/constants';
import { ToolbarServiceService } from '@services/toolbar-service/toolbar-service.service';


@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: []
})
export class ListActorsComponent implements OnInit {

  constructor(private _toolbarService: ToolbarServiceService) { }

  ngOnInit(): void {

    this._toolbarService.setToolbarText(Constants.ACTOR_LIST);

  }
}
