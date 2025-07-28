import React from 'react';

export function PrimaryButton({ children, disabled, onClick }) {
    return (
        <button
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export function SecondaryButton({ children, disabled, onClick }) {
    return (
        <button
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
