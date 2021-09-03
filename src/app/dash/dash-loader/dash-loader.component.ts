import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'app-dash-loader',
  templateUrl: './dash-loader.component.html',
  styleUrls: ['./dash-loader.component.scss']
})
export class DashLoaderComponent implements OnInit {

  deps: string[] = [
    'dashDeps1', 'dashDeps2', 'dashDeps3', 'dashDeps4', 'dashDeps5',
    'dashDeps6', 'dashDeps7', 'dashDeps8', 'dashDeps9', 'dashDeps10',
  ];

  depsLoaded: boolean = false;

  entryPointLoaded:boolean = false;

  constructor(
    private scriptService: ScriptService,
  ) { }

  ngOnInit(): void {
    this.initJS(this.deps);
  }

  private initJS(deps: string[]): void {
    console.log('initJS', deps);

    this.scriptService.loadScripts(deps).then(
      (data) => {
        console.log('script loaded ', data);
        this.depsLoaded = true;
      }
    ).catch((error) => {
      console.log(error)
    });
  };

}
