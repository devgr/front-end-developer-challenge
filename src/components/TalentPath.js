import React from 'react';
import Rune from './Rune';
import Connector from './Connector';

function buildRunes(runesData, talentPathIndex) {
  const items = [];
  runesData.forEach((runeData, runeIndex) => {
    items.push(<Rune {...{ runeData, runeIndex, talentPathIndex }} />);
    if (runeIndex < runesData.length - 1) {
      items.push(<Connector isActive={runeData.isEquipted} />);
    }
  })
  return items;
}

function TalentPath(props) {
  return (
    <div className="row talent-path">
      <div className="col-md-4 talent-path-label-wrapper">
        <div>{props.talentPathData.pathName}</div>
      </div>
      {buildRunes(props.talentPathData.runes, props.talentPathIndex)}
    </div>
  );
}

export default TalentPath;
/*
<div className="col-md-1">
<div className="sprite-frame active"><div className="sprite-utensils"></div></div>
</div>
<div className="col-md-1 connector-line-wrapper"><div className="connector-line"></div></div>
<div className="col-md-1">
<div className="sprite-frame inactive"><div className="sprite-cake"></div></div>
</div>
<div className="col-md-1 connector-line-wrapper"><div className="connector-line"></div></div>
<div className="col-md-1">
<div className="sprite-frame inactive"><div className="sprite-crown"></div></div>
</div>
*/
