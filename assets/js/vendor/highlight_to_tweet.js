/*!
 * Highligh to Tweet
 * https://github.com/AlbertoMontalesi/highlight-to-tweet
 *
 * Copyright 2020 Alberto Montalesi
 * Released under the MIT license
 */

;module.exports = (options) => {
  document.addEventListener('DOMContentLoaded', () => {

      window.tweetHighlighted = (options = {}) => {

          const settings = {
              node: options.node || "<a href='#'>Tweet</a>",
              cssClassess: options.cssClassess || null,
              extra: options.extra || '',
              maxLength: options.maxLength || 280,
              via: options.via || null,
              popupArgs: options.popArgs || 'width=400,height=400,toolbar=0,location=0',
              callback: options.callback || null,
          }

          const tweetIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>`;

          const shareButton = document.createElement('div');

          shareButton.style.display = 'none';
          shareButton.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(url, '_blank', settings.popupArgs);
              if (settings.callback != null) {
                  settings.callback(text);
              }
          })
          let text = '';
          let url = '';
          const body = document.querySelector('body');
          body.appendChild(shareButton);

          const fadeOut = (element) => {
              // TODO: to animate
              element.style.opacity = 0;
          }

          const fadeIn = (element) => {
              // TODO: to animate
              element.style.opacity = 1;
          }

          const getSelectedText = () => {
              if (window.getSelection) {
                  return window.getSelection().toString();
              } else if (document.selection) {
                  return document.selection.createRange().text;
              }
              return '';
          };

          document.addEventListener('mouseup', (e) => {
              text = getSelectedText();
              const btnExists = shareButton.style.display !== 'none';
              if (btnExists || !text.length){
                  return;
              } else {
                  appendShareButton(e)
              }
          })


          document.addEventListener('click', (e) => {
              setTimeout(() => {
                const text = getSelectedText();
                if (text !== '') {
                    e.stopPropagation();
                }
                else {
                    fadeOut(shareButton);
                    shareButton.style.display = 'none';
                }
              }, 10)
          });
          const getTweetURL = function (text, extra, via) {
              let url = 'https://twitter.com/intent/tweet?text=';
              // trim the text to fit in the max allowed 280 characters
              const viaUrl = `&via=${via}`;
              const maxLength = settings.maxLength > 280 ? 280 : settings.maxLength;
              const maxAllowedLength = maxLength - viaUrl.length - extra.length;
              text = `"${text}"`
              let textToTweet = text;
              if(text.length > maxAllowedLength){
                  textToTweet = text.substring(0,maxAllowedLength -1);
              }
              url += encodeURIComponent(textToTweet);
              if (extra)
                  url += encodeURIComponent(' ' + extra);

              if (via)
                  url += viaUrl

              return url;
          };


          const appendShareButton = (e) => {

              url = getTweetURL(text, settings.extra, settings.via);

              shareButton.innerHTML = '';
              shareButton.innerHTML += settings.node;
              shareButton.innerHTML += tweetIcon;
              if(settings.cssClassess && settings.cssClassess.length){
                  shareButton.classList.add(settings.cssClassess);
              }
              shareButton.style.top = `${e.pageY}px`;
              shareButton.style.right = `${e.pageX}px`;
              shareButton.style.position = 'absolute';
              shareButton.style.cursor = 'pointer';
              shareButton.style.display = 'flex';
              shareButton.style.justifyContent = 'space-between';
              shareButton.style.alignContent = 'center';
              shareButton.style.alignItems = 'center';

              if (!options.cssClassess) {
                  // default style
                  shareButton.style.fontFamily = 'Arial, Helvetica, sans-serif';
                  shareButton.style.backgroundColor = '#3898EC';
                  shareButton.style.padding = '10px 15px';
                  shareButton.style.width = '100px'
                  shareButton.style.borderRadius = '5px';
                  shareButton.style.color = 'white';
                  shareButton.firstChild.style.color = 'white';
                  shareButton.firstChild.style.textDecoration = 'none';
                  shareButton.lastChild.style.fill = 'white';
              }
              fadeIn(shareButton);
          }


      }
      window.tweetHighlighted(options)
  })

}
