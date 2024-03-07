
import { User } from "./users/User";
import { Admin } from "./users/Admin";
import { Client } from "./users/Client";

User.hasMany(Admin);
Admin.belongsTo(User);

User.hasMany(Client);
Client.belongsTo(User);
