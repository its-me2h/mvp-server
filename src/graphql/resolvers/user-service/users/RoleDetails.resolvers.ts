import { Client } from '../../../../models/user-service';

export const RoleDetails = {
    __resolveType(roleDetails: any) {
        if (roleDetails instanceof Client) {
            return 'Client';
        } else {
            return null
        }
    },
}

export const Account = {
    roleDetails: async (account: any) => {
        // Determine the roleDetails model based on the user's role
        switch (account.role) {
            case 'CLIENT':
                return await Client.findOne({ where: { accountID: account.id } });
            default:
                return null
        }
    },
}
