import React from 'react';
import $ from 'jquery';
import './css/MovieCSS.css';

export default function Movie({ result }) {
  const ua = navigator.userAgent;

  const sms = e => {
    const target = $(e.target);
    const href = target.attr('href');
    let smsBody = `https://image.tmdb.org/t/p/w185/${result.poster_path}%0aTitle: ${result.title}%0aRelease Date: ${result.release_date}%0aAverage Vote: ${result.vote_average}%0aOverview: ${result.overview}`;

    // device logic for href
    if (ua.includes('iPhone')) {
      target.attr('href', `${href}&body=${smsBody}`);
    } else if (ua.includes('Android')) {
      target.attr('href', `${href}?body=${smsBody}`);
    } else {
      target.attr('href', `${href}+&body=${smsBody}`);
    }

    setTimeout(
      () => {
        target.attr('href', 'sms:');
      },
      0,
      target
    );
  };

  const email = e => {
    const target = $(e.target);
    const href = target.attr('href');
    let emailBody = `Poster: https://image.tmdb.org/t/p/w185/${result.poster_path}%0aTitle: ${result.title}%0aRelease Date: ${result.release_date}%0aAverage Vote: ${result.vote_average}%0aOverview: ${result.overview}`;

    target.attr('href', `${href}${emailBody}`);

    setTimeout(
      () => {
        target.attr('href', 'mailto:?subject=Movie Search&body=');
      },
      0,
      target
    );
  };

  return (
    <div className='card'>
      <div className='card--image-social'>
        <img src={`https://image.tmdb.org/t/p/w185/${result.poster_path}`} alt={result.title} className='card--image' />
        <div className='card--social'>
          <a className='sms' href='sms:' onClick={sms}>
            SMS
          </a>
          <a className='email' href='mailto:?subject=Movie Search&body=' onClick={email}>
            Email
          </a>
        </div>
      </div>
      <div className='card--content'>
        <h3 className='card--title'>{result.title}</h3>
        <p>
          <small>RELEASE DATE: {new Date(result.release_date).toUTCString().slice(0, -13)}</small>
        </p>
        <p>
          <small>AVERAGE VOTE: {result.vote_average}</small>
        </p>
        <p className='card--desc'>{result.overview}</p>
      </div>
    </div>
  );
}
