import React from 'react';
import { useSelector } from 'react-redux';
import { selectPointsAvailable, selectMaxPoints } from '../state/Loadout';

function PointCounter() {
  const pointsAvailable = useSelector(selectPointsAvailable);
  const maxPoints = useSelector(selectMaxPoints);
  const pointsSpent = maxPoints - pointsAvailable;

  return (
    <div className="col-5 col-md-3 point-counter-col">
      <div className="point-counter-wrapper">
        <div className="point-counter-numbers">{pointsSpent} / {maxPoints}</div>
        <div className="point-counter-label">Points Spent</div>
      </div>
    </div>
  );
}

export default PointCounter;
