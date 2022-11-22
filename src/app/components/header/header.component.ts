import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Lista de Tareas';
  showAddTask:boolean = true;
  suscription? : Subscription;

  constructor(
    private uiService : UiService
  ) { 
    this.suscription = this.uiService.onToggle()
                                      .subscribe(value =>this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
    
  }
}
