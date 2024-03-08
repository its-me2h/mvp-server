
import { User } from "./users/User.model";
import { Admin } from "./users/Admin.model";
import { Client } from "./users/Client.model";
import { Manager } from "./users/Manager.model";

User.hasMany(Admin);
Admin.belongsTo(User);

User.hasMany(Client);
Client.belongsTo(User);

User.hasMany(Manager);
Manager.belongsTo(User);
