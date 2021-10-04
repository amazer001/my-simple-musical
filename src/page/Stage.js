import React from 'react';
import './Stage.css';

import StageView from '../component/StageView';
import StageInfo from '../component/StageInfo';

const Stage = ({ historyHeight }) => {
    const stageStyle = {
        height: "calc(100% - " + historyHeight + "px)"
    }
    console.log(historyHeight);

    return (
        <section class="stage" style={stageStyle}>
            <StageView />
            <StageInfo />
        </section>
    );
}

export default Stage;