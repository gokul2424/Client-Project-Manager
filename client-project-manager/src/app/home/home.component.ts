import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent{

  states:Array <Object>=[];
  
  path: string[] = ['user'];
  order: number = 1; // 1 asc, -1 desc;
  @Input('taskname') taskname:string=' ';
  @Input('priority') priority:number=0;
  @Input('parenttask') parenttask:string=' ';
  @Input('startdate') startdate:string=' ';
  @Input('enddate') enddate:string=' ';
  @Input('state') state:Boolean=true;
  
constructor(public http:HttpClient)
{

}
ngOnInit()
{
	this.http.get('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/task')
		.toPromise()
		.then(res=>
		{
			console.log(res);
			this.states=res as any;
		})

}
sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    return false; // do not reload
  }

endtask(taskname:string,priority:number,parenttask:string,startdate:string,enddate:string)
{
	this.http.put('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/endtasks',
	{
		taskname:taskname,
		priority:priority,
		parenttask:parenttask,
		startdate:startdate,
		enddate:enddate
		
	})
		.toPromise()
		.then(res=>
		{
			console.log(res)
			return res
		})
}





updatetask(taskname:string,priority:number,parenttask:string,startdate:string,enddate:string){
        
	this.http.put('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/edittasks',
	{
	  taskname:taskname,
	  priority:priority,
	  parenttask:parenttask,
	  startdate:startdate,
	  enddate:enddate
	})
		.toPromise()
		.then(res=>
		{
			console.log(res)
			return res
		})
}







  
}