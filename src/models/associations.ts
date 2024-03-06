
import { User } from "./users/User";
import { Admin } from "./users/Admin";

User.hasMany(Admin);
Admin.belongsTo(User);
