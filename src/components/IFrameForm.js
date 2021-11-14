import React from 'react';

const IframeSigninForm = (props) => {
   let iref = null;
   const writeHTML = (frame) => {
   
   if (!frame) {
     return;
   }

   iref = frame;
   let doc = frame.contentDocument;
   doc.open();
   doc.write(props.content);
   doc.close();
   frame.style.width = '100%';
   frame.style.height = `${frame.contentWindow.document.body.scrollHeight}px`;
 };

 return <iframe title="form" src="about:blank" scrolling="no" frameBorder="0"  ref={writeHTML}/>
};

export default IframeSigninForm;