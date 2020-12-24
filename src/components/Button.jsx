import React from 'react';
import classNames from 'classnames'

function Button({onClick,className,outline,children}) {
    return (
        <div>
            <button onClick={onClick} className={classNames('button',className,
                {'button--outline':outline},
            )}>{children}</button>
        </div>
    )
}

export default Button;

