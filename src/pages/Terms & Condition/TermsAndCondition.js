import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h4>This is terms and condition </h4>
            <p>Return to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;