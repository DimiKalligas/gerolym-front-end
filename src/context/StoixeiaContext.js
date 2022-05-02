import React from 'react';

const StoixeiaContext = React.createContext();

export function useStoixeiaContext() { // αυτή θα πάει στον Consumer!
    return React.useContext(StoixeiaContext);
}

export default StoixeiaContext;  // αυτό θα πάει στον Provider
