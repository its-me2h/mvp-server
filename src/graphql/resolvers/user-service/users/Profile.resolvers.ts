import { Admin, Client, Manager, SuperAdmin } from '../../../../models/user-service';

export const Profile = {
    __resolveType(profile: any) {
        if (profile instanceof SuperAdmin) {
            return 'SuperAdmin';
        } else if (profile instanceof Admin) {
            return 'Admin';
        } else if (profile instanceof Manager) {
            return 'Manager';
        } else if (profile instanceof Client) {
            return 'Client';
        } else {
            throw new Error('Invalid Profile resolveType');
        }
    },
}

export const User = {
    profile: async (user: any) => {
        // Determine the profile model based on the user's role
        switch (user.role) {
            case 'superAdmin':
                return await SuperAdmin.findAll({ where: { userId: user.id } });
            case 'admin':
                return await Admin.findAll({ where: { userId: user.id } });
            case 'manager':
                return await Manager.findAll({ where: { userId: user.id } });
            case 'client':
                return await Client.findAll({ where: { userId: user.id } });
            default:
                throw new Error('Invalid user role');
        }
    },
}