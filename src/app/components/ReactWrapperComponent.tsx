import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ReactComponent } from 'src/app/components/ReactComponent';

const containerElementName = 'reactComponentContainer';


declare global {
  interface Window {
    React: any;
    ReactDom: any;
  }
}
window.React = window.React || React;
window.ReactDom = window.ReactDom || ReactDOM;

/**
 * Wrapper component for React component. This wrapper is responsible for detecting changes
 * and re-rendering the wrapped React component so that its props take effect,
 * eventually unmounting the wrapped component when the wrapper is destroyed.
 */

// See: https://github.com/nareshdevabatini/samplesPoc/blob/e270a9571543d6d434dd4a2360be7c79038d09c6/arpoc/src/app/sketch/photoeditor/photoeditor.component.ts
@Component({
  selector: 'app-react-wrapper',
  template: `<span #${containerElementName}></span>`,
  styleUrls: ['./ReactComponent.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReactWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {

  @ViewChild(containerElementName, { static: false }) containerRef: ElementRef;;

  @Input() counter = 10;

  @Output() componentClick = new EventEmitter<void>();


  constructor(private el: ElementRef) {
    this.handleDivClicked = this.handleDivClicked.bind(this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.containerRef) {
      this.render();
    }
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }


  handleDivClicked() {
    if (this.componentClick) {
      this.componentClick.emit();
      this.render();
    }
  }

  private render() {
    const { counter } = this;
    ReactDOM.render(
      <div className={'i-am-classy'}>
        <ReactComponent counter={counter} onClick={this.handleDivClicked}/>
      </div>,
      this.containerRef.nativeElement
      // -or- this.el.nativeElement,
    );
  }

}
