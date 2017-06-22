import React from 'react'
import ReactDOM from 'react-dom'
import { Lineup } from './lineup'

import './index.css'

async function main () {
  var res = await navigator.permissions.request({
    name: 'network',
    hostname: '*'
  });
  console.log("Network Request " + res.status);
  ReactDOM.render(
    <Lineup />,
    document.getElementById('content')
  );
}

main();
