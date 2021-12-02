import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets-article'>
      <div className='widgets-articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets-articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets-header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('New React features', 'Top news - 9099 readers')}
      {newsArticle('Top companies 2021', 'Top news - 20345 readers')}
      {newsArticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
      {newsArticle('Bitcoin Breaks $22k', 'Crypto - 8003 readers')}
      {newsArticle('Is Redux too good?', 'Coding - 123 readers')}
      {newsArticle('Best Javascript courses', 'Coding - 635 readers')}
    </div>
  );
}

export default Widgets;
