import React from 'react';
// import './App.scss';

function App() {
  return (
    <div className="App container-lg cool-background">
      <div className="row">
        <div className="col title-wrapper">
          <h1 className="title-text">TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-7 col-md-9">
          <div className="row talent-path">
            <div className="col-md-4 talent-path-label-wrapper">
              <div>TALENT PATH 1</div>
            </div>
            <div className="col-md-1">
              <div className="sprite-frame active"><div className="sprite-chevrons"></div></div>
            </div>
            <div className="col-md-1 connector-line-wrapper"><div className="connector-line active"></div></div>
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
          </div>
          <div className="row talent-path">
            <div className="col-md-4 talent-path-label-wrapper">
              <div>TALENT PATH 2</div>
            </div>
            <div className="col-md-1">
              <div className="sprite-frame inactive"><div className="sprite-ship"></div></div>
            </div>
            <div className="col-md-1 connector-line-wrapper"><div className="connector-line"></div></div>
            <div className="col-md-1">
              <div className="sprite-frame inactive"><div className="sprite-diver"></div></div>
            </div>
            <div className="col-md-1 connector-line-wrapper"><div className="connector-line"></div></div>
            <div className="col-md-1">
              <div className="sprite-frame inactive"><div className="sprite-lightning"></div></div>
            </div>
            <div className="col-md-1 connector-line-wrapper"><div className="connector-line"></div></div>
            <div className="col-md-1">
              <div className="sprite-frame inactive"><div className="sprite-skull"></div></div>
            </div>
          </div>
        </div>
        <div className="col-5 col-md-3 point-counter-col">
          <div className="point-counter-wrapper">
            <div className="point-counter-numbers">3 / 6</div>
            <div className="point-counter-label">Points Spent</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
