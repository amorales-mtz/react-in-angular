import { Injectable } from '@angular/core';

import { ScriptStore } from '../shared/scripts.store';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  private scripts: any = {};

  constructor() {
    this.initialize();
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScripts(scripts: string[]) {
    const promises: any[] = [];
    console.log('>>>', scripts);

    scripts.map((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
        //resolve if already loaded
        if (this.scripts[name].loaded) {
            resolve({script: name, loaded: true, status: 'Already Loaded'});
        } else {
            //load script
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.scripts[name].src;
            script.onload = () => {
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
            };
            // if (script.readyState) {  //IE
            //     script.onreadystatechange = () => {
            //         if (script.readyState === "loaded" || script.readyState === "complete") {
            //             script.onreadystatechange = null;
            //             this.scripts[name].loaded = true;
            //             resolve({script: name, loaded: true, status: 'Loaded'});
            //         }
            //     };
            // } else {  //Others
            //     script.onload = () => {
            //         this.scripts[name].loaded = true;
            //         resolve({script: name, loaded: true, status: 'Loaded'});
            //     };
            // }
            script.onerror = (_err: any) => resolve({script: name, loaded: false, status: 'Loaded'});
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    });
  }

  loadJsonScript(id: string, obj: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let content: string = '';
      try {
        content = JSON.stringify(obj);
      } catch (error) {
        resolve({script: id, loaded: false, status: 'NotLoaded'})
      }
      let script = document.createElement('script');
      script.id = id;
      script.type = `application/json`;
      script.text = content;
      // script.onload = () => {
      //     resolve({script: id, loaded: true, status: 'Loaded'});
      // };
      // script.onerror = (_err: any) => resolve({script: id, loaded: false, status: 'Loaded'});
      document.getElementsByTagName('head')[0].appendChild(script);
      setTimeout(
        () => resolve({script: id, loaded: true, status: 'Loaded'}),
        100
      );
    });
  }


  private initialize(): void {
    ScriptStore.map((x: any) => {
        this.scripts[x.name] = {
            loaded: false,
            src: x.src
        };
    });
  }
}
