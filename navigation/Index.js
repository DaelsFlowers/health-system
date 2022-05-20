import React from 'react';

import { AuthenticatedUserProvider } from './Authen';
import RootNavigator from './RootNavigation';

/**
 * Wrap all providers here
 */

export default function Routes() {
    return (
        <AuthenticatedUserProvider>
            <RootNavigator />
        </AuthenticatedUserProvider>
    );
}