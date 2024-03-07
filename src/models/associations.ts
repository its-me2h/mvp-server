
import { User } from "./users/User";
import { Admin } from "./users/Admin";
import { Client } from "./users/Client";
import { Manager } from "./users/Manager";

User.hasMany(Admin);
Admin.belongsTo(User);

User.hasMany(Client);
Client.belongsTo(User);

User.hasMany(Manager);
Manager.belongsTo(User);
