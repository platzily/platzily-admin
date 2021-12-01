import { modelUser } from "./entities/User";

modelUser().getAll().then(function(users){
  console.table(users)
});