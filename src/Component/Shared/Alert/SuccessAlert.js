import React from 'react';

const SuccessAlert = () => {
    return (

        <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div class="flex items-center justify-center w-12 bg-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                    <span class="font-semibold text-green-500 dark:text-green-400">Success</span>
                    <p class="text-sm text-gray-600 dark:text-gray-200">Your Info was registered!</p>
                </div>
            </div>
        </div>

    );
};

export default SuccessAlert;