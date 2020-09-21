import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { equipRune, unEquipRune, selectPointsAvailable } from '../state/Loadout';

function Rune(props) {
  const pointsAvailable = useSelector(selectPointsAvailable);
  const dispatch = useDispatch();

  const { spriteClass, isEquipted, isEquipable, isUnEquipable } = props.runeData;

  const primaryClickRune = () => {
    if (isEquipable && pointsAvailable > 0) {
      dispatch(equipRune({ talentPathIndex: props.talentPathIndex, runeIndex: props.runeIndex }));
    }
  }
  const secondaryClickRune = () => {
    if (isUnEquipable) {
      dispatch(unEquipRune({ talentPathIndex: props.talentPathIndex, runeIndex: props.runeIndex }));
    }
  }

  let spriteFrameClasses = 'sprite-frame';

  if (isEquipted) {
    spriteFrameClasses += ' equipted';
  } else {
    spriteFrameClasses += ' un-equipted';
  }

  if (isEquipable) {
    spriteFrameClasses += ' equipable';
  }

  return (
    <div className="col-md-1">
      <div className={spriteFrameClasses}
        onClick={primaryClickRune}
        onContextMenu={secondaryClickRune}
      >
        <div className={spriteClass}></div>
      </div>
    </div>
  );
}

export default Rune;
