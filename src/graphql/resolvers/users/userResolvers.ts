import { v4 as uuid } from 'uuid';
import { User } from '../../../models/users/User';
import { Admin } from '../../../models/users/Admin';
import { Manager } from '../../../models/users/Manager';
import { Client } from '../../../models/users/Client';

export const userResolvers = {
    Query: {
        user: async (_: any, { id }: { id: string }) => {
            return await User.findByPk(id);
        },
    },
    Mutation: {
        createUser: async (_: any, { object }: { object: any }) => {
            const user: any = await User.create({ id: uuid(), ...object });
            const roleMap: { [key: string]: any } = { admin: Admin, manager: Manager, client: Client };
            const RoleModel = roleMap[object.role];
            if (RoleModel) {
                await RoleModel.create({
                    id: uuid(),
                    userID: user.id,
                    status: user.status
                });
            }
            return user;
        },
        updateUser: async (_: any, { id, object }: { id: string, object: any }) => {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            await user.update(object);
            return user;
        },
    },
};