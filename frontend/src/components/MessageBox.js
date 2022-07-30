import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function MesssageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}
