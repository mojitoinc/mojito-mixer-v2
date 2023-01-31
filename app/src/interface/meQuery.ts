export interface User {
    __typename: string;
    id: string;
    username: string;
    name: string;
    email: string;
}

export interface Organization {
    __typename: string;
    id: string;
    name: string;
}

export interface UserOrg {
    __typename: string;
    organization: Organization;
}

export interface Wallet {
    __typename: string;
    id: string;
    name: string;
    address: string;
}

export interface Me {
    __typename: string;
    id: string;
    user: User;
    userOrgs: UserOrg[];
    wallets: Wallet[];
}

export interface MeData {
    me: Me;
}
