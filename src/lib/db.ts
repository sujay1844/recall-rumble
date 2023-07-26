import { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD } from "$env/static/private";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

// create the connection
const connection = connect({
  host: DATABASE_HOST,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
});
 
export const db = drizzle(connection);