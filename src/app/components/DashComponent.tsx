import * as React from 'react';
import { useEffect, useState } from 'react';
// import { DashApp } from 'dash-embedded-component';

// window.React = React;
// window.ReactDOM = ReactDOM;
// window.PropTypes = PropTypes;

export interface IDashProps {
  count: number;
  onClick?: () => void;
}

// See: https://itnext.io/jsx-for-angular-developers-23f9d1f21259
export const DashAppComponent: React.FC<IDashProps> = (props: IDashProps) => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         sharedData: {
    //             myObject: {
    //                 clicks: 0,
    //                 aString: randomString(5),
    //                 data: myData,
    //                 multiplyFunc: (x, y) => { ... },
    //                 sumFunc: (x, y) => { ... },
    //                 storeDataFromDash: obj => { ... },
    //                 dashAppData: {}
    //             },
    //         },
    //     };
    //     this.clickIncrement = this.clickIncrement.bind(this);
    //     ...
    // }

    // render() {
    //     return (
    //     <div className="App-Background">
    //         ...
    //         <div className="App-Content">
    //         <h1>Embedded Dash Application</h1>
    //         <DashApp config={{url_base_pathname: "http://dash.tests:8050"}} value={this.state.sharedData} />
    //         </div>
    //     </div>
    //     );
    // }

    const [odd, setOdd] = useState<boolean>(false);
    let even = false;

    useEffect(() => {
      // Render again
      props.count++;
      setOdd(props.count % 2 === 1);

      // Do not trigger a new render
      even = props.count % 2 === 0;
    }, [props.count]);

    return (
      <>
        <div>{odd} {props.count}</div>
      </>
    );
}
export default DashAppComponent;
