import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  taskElements = [{type:'individual',name:'Tugas Pertama',content:'Bismillah Berhasil'}];
 
  onTaskAdded(taskData: {taskName:string,taskContent:string}) {
    this.taskElements.push({
      type: 'individual',
      name: taskData.taskName,
      content: taskData.taskContent
    });
  }

  onGroupTaskAdded(groupTaskData: {taskName:string,taskContent:string}) {
    this.taskElements.push({
      type: 'group',
      name: groupTaskData.taskName,
      content: groupTaskData.taskContent
    });
  }

  onDestroy(){
    this.taskElements.splice(0,100);
  }


}
