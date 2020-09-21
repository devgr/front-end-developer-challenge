import React from 'react';
import TalentPath from './TalentPath';
import PointCounter from './PointCounter';
import { useSelector } from 'react-redux';
import { selectTalentPaths } from '../state/Loadout';

function TalentCalculator() {
  const talentPaths = useSelector(selectTalentPaths);

  return (
    <div className="App container-lg cool-background">
      <div className="row">
        <div className="col title-wrapper">
          <h1 className="title-text">TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-7 col-md-9">
          {talentPaths.map((talentPath, index) => <TalentPath talentPathData={talentPath} talentPathIndex={index}/>)}
        </div>
        <PointCounter />
      </div>
    </div>
  );
}

export default TalentCalculator;
