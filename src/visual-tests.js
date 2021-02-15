// WARNING:
// This file contains static examples for visual regression tests.
// Nothing in this file should be copied or used.
// File is intentionally not-prettified to discourage copy/paste

/* prettier-ignore */
export function StandardAlert() {
  return (
    <VisualTestContainer>
      <div aria-labelledby="swal2-title" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" aria-modal="true" style={{display: 'flex'}}><div className="swal2-header"><ul className="swal2-progress-steps" style={{display: 'none'}} /><div className="swal2-icon swal2-error" style={{display: 'none'}} /><div className="swal2-icon swal2-question" style={{display: 'none'}} /><div className="swal2-icon swal2-warning" style={{display: 'none'}} /><div className="swal2-icon swal2-info" style={{display: 'none'}} /><div className="swal2-icon swal2-success" style={{display: 'none'}} /><img className="swal2-image" src="data:image/svg+xml;utf8,<svg width=&quot;48&quot; height=&quot;48&quot; viewBox=&quot;0 0 48 48&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M26.4 16.8H21.6V12H26.4V16.8ZM26.4 36H21.6V21.6H26.4V36ZM24 0C19.2533 0 14.6131 1.40758 10.6663 4.04473C6.71954 6.68188 3.6434 10.4302 1.8269 14.8156C0.0103987 19.201 -0.464881 24.0266 0.461164 28.6822C1.38721 33.3377 3.67299 37.6141 7.02945 40.9706C10.3859 44.327 14.6623 46.6128 19.3178 47.5388C23.9734 48.4649 28.799 47.9896 33.1844 46.1731C37.5698 44.3566 41.3181 41.2805 43.9553 37.3337C46.5924 33.3869 48 28.7468 48 24C48 17.6348 45.4715 11.5303 40.9706 7.02944C36.4697 2.52856 30.3652 0 24 0Z&quot; fill=&quot;%23059CEE&quot;/></svg>" alt style={{display: 'flex'}} /><h2 className="swal2-title" id="swal2-title" style={{display: 'flex'}}>Informational headline</h2><button type="button" className="swal2-close" aria-label="Close this dialog" style={{display: 'none'}}>×</button></div><div className="swal2-content"><div id="swal2-content" className="swal2-html-container" style={{display: 'block'}}>This is the alert body copy that should clearly state the outcome of continuing, side effects, and repetability.</div><input className="swal2-input" style={{display: 'none'}} /><input type="file" className="swal2-file" style={{display: 'none'}} /><div className="swal2-range" style={{display: 'none'}}><input type="range" /><output /></div><select className="swal2-select" style={{display: 'none'}} /><div className="swal2-radio" style={{display: 'none'}} /><label htmlFor="swal2-checkbox" className="swal2-checkbox" style={{display: 'none'}}><input type="checkbox" /><span className="swal2-label" /></label><textarea className="swal2-textarea" style={{display: 'none'}} defaultValue={""} /><div className="swal2-validation-message" id="swal2-validation-message" /></div><div className="swal2-actions"><button type="button" className="swal2-confirm swal2-styled" aria-label style={{display: 'inline-block', backgroundColor: 'rgb(5, 156, 238)', borderLeftColor: 'rgb(5, 156, 238)', borderRightColor: 'rgb(5, 156, 238)'}}>OK</button><button type="button" className="swal2-cancel swal2-styled" aria-label style={{display: 'none'}}>Cancel</button></div><div className="swal2-footer" style={{display: 'none'}} /><div className="swal2-timer-progress-bar-container"><div className="swal2-timer-progress-bar" style={{display: 'none'}} /></div></div>
    </VisualTestContainer>
  );
}

/* prettier-ignore */
export function SuccessAlert() {
  return (
    <VisualTestContainer>
      <div aria-labelledby="swal2-title" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" aria-modal="true" style={{display: 'flex'}}><div className="swal2-header"><ul className="swal2-progress-steps" style={{display: 'none'}} /><div className="swal2-icon swal2-error" style={{display: 'none'}} /><div className="swal2-icon swal2-question" style={{display: 'none'}} /><div className="swal2-icon swal2-warning" style={{display: 'none'}} /><div className="swal2-icon swal2-info" style={{display: 'none'}} /><div className="swal2-icon swal2-success" style={{display: 'none'}} /><img className="swal2-image" src="data:image/svg+xml;utf8,<svg width=&quot;48&quot; height=&quot;48&quot; viewBox=&quot;0 0 48 48&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M24 0.5C19.2533 0.5 14.6131 1.87825 10.6663 4.46046C6.71955 7.04268 3.6434 10.7129 1.8269 15.0069C0.0103987 19.301 -0.464881 24.0261 0.461164 28.5846C1.38721 33.1432 3.67299 37.3305 7.02945 40.617C10.3859 43.9035 14.6623 46.1417 19.3178 47.0485C23.9734 47.9552 28.799 47.4898 33.1844 45.7112C37.5698 43.9325 41.3181 40.9205 43.9553 37.0559C46.5924 33.1913 48 28.6479 48 24C48 17.7674 45.4714 11.7901 40.9706 7.38299C36.4697 2.97589 30.3652 0.5 24 0.5V0.5ZM21 34.6631L10.29 24.2056L13.71 20.8569L21 28.0244L34.29 14.9819L37.71 18.3306L21 34.6631Z&quot; fill=&quot;%232AA92F&quot;/></svg>" alt style={{display: 'flex'}} /><h2 className="swal2-title" id="swal2-title" style={{display: 'flex'}}>Success!</h2><button type="button" className="swal2-close" aria-label="Close this dialog" style={{display: 'none'}}>×</button></div><div className="swal2-content"><div id="swal2-content" className="swal2-html-container" style={{display: 'block'}}>Your text message was successfully sent to the Worship Team Volunteer list.</div><input className="swal2-input" style={{display: 'none'}} /><input type="file" className="swal2-file" style={{display: 'none'}} /><div className="swal2-range" style={{display: 'none'}}><input type="range" /><output /></div><select className="swal2-select" style={{display: 'none'}} /><div className="swal2-radio" style={{display: 'none'}} /><label htmlFor="swal2-checkbox" className="swal2-checkbox" style={{display: 'none'}}><input type="checkbox" /><span className="swal2-label" /></label><textarea className="swal2-textarea" style={{display: 'none'}} defaultValue={""} /><div className="swal2-validation-message" id="swal2-validation-message" /></div><div className="swal2-actions"><button type="button" className="swal2-confirm swal2-styled" aria-label style={{display: 'inline-block', backgroundColor: 'rgb(5, 156, 238)', borderLeftColor: 'rgb(5, 156, 238)', borderRightColor: 'rgb(5, 156, 238)'}}>OK</button><button type="button" className="swal2-cancel swal2-styled" aria-label style={{display: 'none'}}>Cancel</button></div><div className="swal2-footer" style={{display: 'none'}} /><div className="swal2-timer-progress-bar-container"><div className="swal2-timer-progress-bar" style={{display: 'none'}} /></div></div>
    </VisualTestContainer>
  );
}

/* prettier-ignore */
export function ErrorAlert() {
  return (
    <VisualTestContainer>
      <div aria-labelledby="swal2-title" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" aria-modal="true" style={{display: 'flex'}}><div className="swal2-header"><ul className="swal2-progress-steps" style={{display: 'none'}} /><div className="swal2-icon swal2-error" style={{display: 'none'}} /><div className="swal2-icon swal2-question" style={{display: 'none'}} /><div className="swal2-icon swal2-warning" style={{display: 'none'}} /><div className="swal2-icon swal2-info" style={{display: 'none'}} /><div className="swal2-icon swal2-success" style={{display: 'none'}} /><img className="swal2-image" src="data:image/svg+xml;utf8,<svg width=&quot;48&quot; height=&quot;48&quot; viewBox=&quot;0 0 48 48&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M30.4577 33.69L23.9987 27.231L17.5397 33.69L14.3087 30.459L20.7677 24L14.3087 17.541L17.5397 14.31L23.9987 20.769L30.4577 14.31L33.6887 17.541L27.2297 24L33.6887 30.459L30.4577 33.69ZM40.1507 7.84797C36.9562 4.65353 32.8861 2.47812 28.4552 1.59682C24.0243 0.715514 19.4316 1.16791 15.2578 2.89679C11.084 4.62566 7.51662 7.55338 5.00675 11.3097C2.49687 15.066 1.15723 19.4823 1.15723 24C1.15723 28.5177 2.49687 32.9339 5.00675 36.6902C7.51662 40.4466 11.084 43.3743 15.2578 45.1032C19.4316 46.832 24.0243 47.2844 28.4552 46.4031C32.8861 45.5218 36.9562 43.3464 40.1507 40.152C44.4309 35.8663 46.835 30.057 46.835 24C46.835 17.943 44.4309 12.1336 40.1507 7.84797Z&quot; fill=&quot;%23E75146&quot;/></svg>" alt style={{display: 'flex'}} /><h2 className="swal2-title" id="swal2-title" style={{display: 'flex'}}>An error occured</h2><button type="button" className="swal2-close" aria-label="Close this dialog" style={{display: 'none'}}>×</button></div><div className="swal2-content"><div id="swal2-content" className="swal2-html-container" style={{display: 'block'}}>A category with that name already exists. Please try a different name.</div><input className="swal2-input" style={{display: 'none'}} /><input type="file" className="swal2-file" style={{display: 'none'}} /><div className="swal2-range" style={{display: 'none'}}><input type="range" /><output /></div><select className="swal2-select" style={{display: 'none'}} /><div className="swal2-radio" style={{display: 'none'}} /><label htmlFor="swal2-checkbox" className="swal2-checkbox" style={{display: 'none'}}><input type="checkbox" /><span className="swal2-label" /></label><textarea className="swal2-textarea" style={{display: 'none'}} defaultValue={""} /><div className="swal2-validation-message" id="swal2-validation-message" /></div><div className="swal2-actions"><button type="button" className="swal2-confirm swal2-styled" aria-label style={{display: 'inline-block', backgroundColor: 'rgb(5, 156, 238)', borderLeftColor: 'rgb(5, 156, 238)', borderRightColor: 'rgb(5, 156, 238)'}}>OK</button><button type="button" className="swal2-cancel swal2-styled" aria-label style={{display: 'none'}}>Cancel</button></div><div className="swal2-footer" style={{display: 'none'}} /><div className="swal2-timer-progress-bar-container"><div className="swal2-timer-progress-bar" style={{display: 'none'}} /></div></div>
    </VisualTestContainer>
  );
}

/* prettier-ignore */
export function StandardConfirm() {
  return (
    <VisualTestContainer>
      <div aria-labelledby="swal2-title" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" aria-modal="true" style={{display: 'flex'}}><div className="swal2-header"><ul className="swal2-progress-steps" style={{display: 'none'}} /><div className="swal2-icon swal2-error" style={{display: 'none'}} /><div className="swal2-icon swal2-question" style={{display: 'none'}} /><div className="swal2-icon swal2-warning" style={{display: 'none'}} /><div className="swal2-icon swal2-info" style={{display: 'none'}} /><div className="swal2-icon swal2-success" style={{display: 'none'}} /><img className="swal2-image" src="data:image/svg+xml;utf8,<svg width=&quot;48&quot; height=&quot;48&quot; viewBox=&quot;0 0 48 48&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M26.4 16.8H21.6V12H26.4V16.8ZM26.4 36H21.6V21.6H26.4V36ZM24 0C19.2533 0 14.6131 1.40758 10.6663 4.04473C6.71954 6.68188 3.6434 10.4302 1.8269 14.8156C0.0103987 19.201 -0.464881 24.0266 0.461164 28.6822C1.38721 33.3377 3.67299 37.6141 7.02945 40.9706C10.3859 44.327 14.6623 46.6128 19.3178 47.5388C23.9734 48.4649 28.799 47.9896 33.1844 46.1731C37.5698 44.3566 41.3181 41.2805 43.9553 37.3337C46.5924 33.3869 48 28.7468 48 24C48 17.6348 45.4715 11.5303 40.9706 7.02944C36.4697 2.52856 30.3652 0 24 0Z&quot; fill=&quot;%23059CEE&quot;/></svg>" alt style={{display: 'flex'}} /><h2 className="swal2-title" id="swal2-title" style={{display: 'flex'}}>This site uses cookies</h2><button type="button" className="swal2-close" aria-label="Close this dialog" style={{display: 'none'}}>×</button></div><div className="swal2-content"><div id="swal2-content" className="swal2-html-container" style={{display: 'block'}}>We use cookies to store your personal preferences. Please accept use of cookies for optimal performance.</div><input className="swal2-input" style={{display: 'none'}} /><input type="file" className="swal2-file" style={{display: 'none'}} /><div className="swal2-range" style={{display: 'none'}}><input type="range" /><output /></div><select className="swal2-select" style={{display: 'none'}} /><div className="swal2-radio" style={{display: 'none'}} /><label htmlFor="swal2-checkbox" className="swal2-checkbox" style={{display: 'none'}}><input type="checkbox" /><span className="swal2-label" /></label><textarea className="swal2-textarea" style={{display: 'none'}} defaultValue={""} /><div className="swal2-validation-message" id="swal2-validation-message" /></div><div className="swal2-actions"><button type="button" className="swal2-cancel swal2-styled" aria-label style={{display: 'inline-block'}}>No, don't use cookies</button><button type="button" className="swal2-confirm swal2-styled" aria-label style={{display: 'inline-block', backgroundColor: 'rgb(5, 156, 238)', borderLeftColor: 'rgb(5, 156, 238)', borderRightColor: 'rgb(5, 156, 238)'}}>Yes, I accept cookies</button></div><div className="swal2-footer" style={{display: 'none'}} /><div className="swal2-timer-progress-bar-container"><div className="swal2-timer-progress-bar" style={{display: 'none'}} /></div></div>
    </VisualTestContainer>
  )
}

/* prettier-ignore */
export function CreateConfirm() {
  return (
    <VisualTestContainer>
      <div aria-labelledby="swal2-title" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" aria-modal="true" style={{display: 'flex'}}><div className="swal2-header"><ul className="swal2-progress-steps" style={{display: 'none'}} /><div className="swal2-icon swal2-error" style={{display: 'none'}} /><div className="swal2-icon swal2-question" style={{display: 'none'}} /><div className="swal2-icon swal2-warning" style={{display: 'none'}} /><div className="swal2-icon swal2-info" style={{display: 'none'}} /><div className="swal2-icon swal2-success" style={{display: 'none'}} /><img className="swal2-image" src="data:image/svg+xml;utf8,<svg width=&quot;48&quot; height=&quot;48&quot; viewBox=&quot;0 0 48 48&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M47.6841 41.1314L26.0228 3.71675C25.818 3.36141 25.5232 3.06629 25.1681 2.86109C24.813 2.65589 24.4101 2.54785 24 2.54785C23.5899 2.54785 23.187 2.65589 22.8319 2.86109C22.4768 3.06629 22.182 3.36141 21.9772 3.71675L0.315892 41.1314C0.109626 41.4868 0.000669735 41.8903 3.07773e-06 42.3012C-0.000663579 42.7121 0.106983 43.1159 0.312095 43.4719C0.517208 43.828 0.81254 44.1237 1.16834 44.3292C1.52413 44.5348 1.92782 44.6429 2.33872 44.6428H45.6613C46.0722 44.6429 46.4759 44.5348 46.8317 44.3292C47.1875 44.1237 47.4828 43.828 47.6879 43.4719C47.893 43.1159 48.0007 42.7121 48 42.3012C47.9993 41.8903 47.8904 41.4868 47.6841 41.1314ZM26.3378 37.6293H21.6622V32.9536H26.3378V37.6293ZM26.3378 28.2779H21.6622V18.9235H26.3378V28.2779Z&quot; fill=&quot;%23FBC02D&quot;/></svg>" alt style={{display: 'flex'}} /><h2 className="swal2-title" id="swal2-title" style={{display: 'flex'}}>Send this Message?</h2><button type="button" className="swal2-close" aria-label="Close this dialog" style={{display: 'none'}}>×</button></div><div className="swal2-content"><div id="swal2-content" className="swal2-html-container" style={{display: 'block'}}>This message will be emailed to John Smith at jsmith@pco.bz and a copy will be saved in their profile.</div><input className="swal2-input" style={{display: 'none'}} /><input type="file" className="swal2-file" style={{display: 'none'}} /><div className="swal2-range" style={{display: 'none'}}><input type="range" /><output /></div><select className="swal2-select" style={{display: 'none'}} /><div className="swal2-radio" style={{display: 'none'}} /><label htmlFor="swal2-checkbox" className="swal2-checkbox" style={{display: 'none'}}><input type="checkbox" /><span className="swal2-label" /></label><textarea className="swal2-textarea" style={{display: 'none'}} defaultValue={""} /><div className="swal2-validation-message" id="swal2-validation-message" /></div><div className="swal2-actions"><button type="button" className="swal2-cancel swal2-styled" aria-label style={{display: 'inline-block'}}>No, don't send it</button><button type="button" className="swal2-confirm swal2-styled" aria-label style={{display: 'inline-block', backgroundColor: 'rgb(42, 169, 47)', borderLeftColor: 'rgb(42, 169, 47)', borderRightColor: 'rgb(42, 169, 47)'}}>Yes, send it</button></div><div className="swal2-footer" style={{display: 'none'}} /><div className="swal2-timer-progress-bar-container"><div className="swal2-timer-progress-bar" style={{display: 'none'}} /></div></div>
    </VisualTestContainer>
  )
}

/* prettier-ignore */
export function DestroyConfirm() {
  return (
    <VisualTestContainer>
      <div aria-labelledby="swal2-title" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" aria-modal="true" style={{display: 'flex'}}><div className="swal2-header"><ul className="swal2-progress-steps" style={{display: 'none'}} /><div className="swal2-icon swal2-error" style={{display: 'none'}} /><div className="swal2-icon swal2-question" style={{display: 'none'}} /><div className="swal2-icon swal2-warning" style={{display: 'none'}} /><div className="swal2-icon swal2-info" style={{display: 'none'}} /><div className="swal2-icon swal2-success" style={{display: 'none'}} /><img className="swal2-image" src="data:image/svg+xml;utf8,<svg width=&quot;48&quot; height=&quot;48&quot; viewBox=&quot;0 0 48 48&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M47.6841 41.1314L26.0228 3.71675C25.818 3.36141 25.5232 3.06629 25.1681 2.86109C24.813 2.65589 24.4101 2.54785 24 2.54785C23.5899 2.54785 23.187 2.65589 22.8319 2.86109C22.4768 3.06629 22.182 3.36141 21.9772 3.71675L0.315892 41.1314C0.109626 41.4868 0.000669735 41.8903 3.07773e-06 42.3012C-0.000663579 42.7121 0.106983 43.1159 0.312095 43.4719C0.517208 43.828 0.81254 44.1237 1.16834 44.3292C1.52413 44.5348 1.92782 44.6429 2.33872 44.6428H45.6613C46.0722 44.6429 46.4759 44.5348 46.8317 44.3292C47.1875 44.1237 47.4828 43.828 47.6879 43.4719C47.893 43.1159 48.0007 42.7121 48 42.3012C47.9993 41.8903 47.8904 41.4868 47.6841 41.1314ZM26.3378 37.6293H21.6622V32.9536H26.3378V37.6293ZM26.3378 28.2779H21.6622V18.9235H26.3378V28.2779Z&quot; fill=&quot;%23E75146&quot;/></svg>" alt style={{display: 'flex'}} /><h2 className="swal2-title" id="swal2-title" style={{display: 'flex'}}>Delete profile?</h2><button type="button" className="swal2-close" aria-label="Close this dialog" style={{display: 'none'}}>×</button></div><div className="swal2-content"><div id="swal2-content" className="swal2-html-container" style={{display: 'block'}}>Removing Cathy's profile will delete their profile and all related activity. This cannot be undone.</div><input className="swal2-input" style={{display: 'none'}} /><input type="file" className="swal2-file" style={{display: 'none'}} /><div className="swal2-range" style={{display: 'none'}}><input type="range" /><output /></div><select className="swal2-select" style={{display: 'none'}} /><div className="swal2-radio" style={{display: 'none'}} /><label htmlFor="swal2-checkbox" className="swal2-checkbox" style={{display: 'none'}}><input type="checkbox" /><span className="swal2-label" /></label><textarea className="swal2-textarea" style={{display: 'none'}} defaultValue={""} /><div className="swal2-validation-message" id="swal2-validation-message" /></div><div className="swal2-actions"><button type="button" className="swal2-cancel swal2-styled" aria-label style={{display: 'inline-block'}}>No, keep profile</button><button type="button" className="swal2-confirm swal2-styled" aria-label style={{display: 'inline-block', backgroundColor: 'rgb(231, 81, 70)', borderLeftColor: 'rgb(231, 81, 70)', borderRightColor: 'rgb(231, 81, 70)'}}>Yes, keep Cathy's profile</button></div><div className="swal2-footer" style={{display: 'none'}} /><div className="swal2-timer-progress-bar-container"><div className="swal2-timer-progress-bar" style={{display: 'none'}} /></div></div>
    </VisualTestContainer>
  )
}

function VisualTestContainer(props) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,.4)",
        display: "flex",
        padding: "2rem",
        alightItems: "center",
        justifyContent: "center",
      }}
      {...props}
    />
  );
}
