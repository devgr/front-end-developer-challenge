import { createSlice } from '@reduxjs/toolkit';

export const loadoutSlice = createSlice({
  name: 'loadout',
  initialState: {
    // Start with all 6 points
    pointsAvailable: 6,
    maxPoints: 6,
    talentPaths: [
      // Start with all runes un-equipted. First rune in each path can be equipted.
      {
        pathName: 'TALENT PATH 1',
        runes: [
          { spriteClass: 'sprite-chevrons', isEquipted: false, isEquipable: true, isUnEquipable: false },
          { spriteClass: 'sprite-utensils', isEquipted: false, isEquipable: false, isUnEquipable: false },
          { spriteClass: 'sprite-cake', isEquipted: false, isEquipable: false, isUnEquipable: false },
          { spriteClass: 'sprite-crown', isEquipted: false, isEquipable: false, isUnEquipable: false },
        ],
      },
      {
        pathName: 'TALENT PATH 2',
        runes: [
          { spriteClass: 'sprite-ship', isEquipted: false, isEquipable: true, isUnEquipable: false },
          { spriteClass: 'sprite-diver', isEquipted: false, isEquipable: false, isUnEquipable: false },
          { spriteClass: 'sprite-lightning', isEquipted: false, isEquipable: false, isUnEquipable: false },
          { spriteClass: 'sprite-skull', isEquipted: false, isEquipable: false, isUnEquipable: false },
        ],
      },
    ],
  },
  reducers: {
    equipRune(state, action) {
      // Additional validation could be done here. For this demo, we are going to assume
      // that the Rune component is correctly handling the isEquipable and isUnEquipable properties.
      // Also assuming that the Rune component is enforcing pointsAvailable.
      const { talentPathIndex, runeIndex } = action.payload;
      const runes = state.talentPaths[talentPathIndex].runes;

      // Update selected rune
      runes[runeIndex].isEquipted = true;
      runes[runeIndex].isUnEquipable = true;
      runes[runeIndex].isEquipable = false;

      // Update previous rune
      if (runeIndex - 1 >= 0) {
        runes[runeIndex - 1].isUnEquipable = false;
      }

      // Update next rune
      if (runeIndex + 1 < runes.length) {
        runes[runeIndex + 1].isEquipable = true;
      }

      // Update points available
      state.pointsAvailable--;
    },
    unEquipRune(state, action) {
      const { talentPathIndex, runeIndex } = action.payload;
      const runes = state.talentPaths[talentPathIndex].runes;

      // Update selected rune
      runes[runeIndex].isEquipted = false;
      runes[runeIndex].isUnEquipable = false;
      runes[runeIndex].isEquipable = true;

      // Update previous rune
      if (runeIndex - 1 >= 0) {
        runes[runeIndex - 1].isUnEquipable = true;
      }

      // Update next rune
      if (runeIndex + 1 < runes.length) {
        runes[runeIndex + 1].isEquipable = false;
      }

      // Update points available
      state.pointsAvailable++;
    },
  },
});

export const { equipRune, unEquipRune } = loadoutSlice.actions;
export const selectPointsAvailable = state => state.loadout.pointsAvailable;
export const selectMaxPoints = state => state.loadout.maxPoints;
export const selectTalentPaths = state => state.loadout.talentPaths;
export default loadoutSlice.reducer;
