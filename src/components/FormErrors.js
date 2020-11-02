import React from 'react';

export const FormErrors = ({error}) => (error !== '') ? <div style={{color: 'red'}}>{error}</div> : <></>
