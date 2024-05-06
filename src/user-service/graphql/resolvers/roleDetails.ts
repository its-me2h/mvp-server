import { Client, User } from '../../models';

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
        // Find the user associated with the account
        const user: any = await User.findByPk(account.id);
        switch (user.role) {
            // If the user is a CLIENT, return their client details
            case 'CLIENT':
                return await Client.findAll({ where: { userId: user.id } });
            // For other roles, return null (no role details)
            default:
                return null
        }
    },
};
