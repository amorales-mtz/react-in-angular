import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
  init:string[] = [
    'dashRenderer'
  ];

  depsLoaded: boolean = false;
  initLoaded: boolean = false;
  configLoaded: boolean = false;

  entryPointLoaded:boolean = false;

  constructor(
    // private render: Renderer2,
    // @Inject(DOCUMENT) private _document: Document,
    private scriptService: ScriptService,
  ) { }

  ngOnInit(): void {
    this.initDashConfig();
    this.initJS(this.deps);
  }

  private initJS(deps: string[]): void {
    console.log('initJS', deps);

    this.scriptService.loadScripts(deps).then(
      (data) => {
        console.log('script loaded ', data);
        this.depsLoaded = true;
        this.initDashRenderer(this.init);
      }
    ).catch((error) => {
      console.log(error)
    });
  };

  private initDashRenderer(init: string[]): void {
    this.scriptService.loadScripts(init).then(
      (data) => {
        this.initLoaded = true;
        console.log('init loaded ', data);
      }
    ).catch((error) => {
      console.log(error)
    });
  }

  private initDashConfig(): void {
    this.scriptService.loadJsonScript('_dash-config', {
      url_base_pathname : 'null',
      requests_pathname_prefix : 'https://poc-dash-oa.azurewebsites.net/',
      ui : 'false',
      props_check : 'false',
      show_undo_redo : 'false',
      suppress_callback_exceptions : 'false',
      update_title : 'Updating...'
    }).then((data) => {
      this.configLoaded = data.loaded;
      console.log('data>>>', data);

    }).catch((error) => {
      console.log(error)
    });
    // Directly with renderer2
    // let script = this.render.createElement('script');
    // script.id = '_dash-config';
    // script.type = `application/json`;
    // script.text = `{"url_base_pathname": null, "requests_pathname_prefix": "https://poc-dash-oa.azurewebsites.net/", "ui": false, "props_check": false, "show_undo_redo": false, "suppress_callback_exceptions": false, "update_title": "Updating..."}`;
    // this.render.appendChild(this._document.body, script);
  }

}
