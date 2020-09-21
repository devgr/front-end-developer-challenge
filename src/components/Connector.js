import React from 'react';

function Connector(props) {
  const { isActive } = props;
  let connectorLineClasses = 'connector-line';
  if (isActive) {
    connectorLineClasses += ' active';
  }
  return (
    <div className="col-md-1 connector-line-wrapper">
      <div className={connectorLineClasses}></div>
    </div>
  );
}

export default Connector;
