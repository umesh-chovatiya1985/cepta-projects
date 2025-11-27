import { pool } from "./db";

export const queryHelper = async (query: string) => {
    const userQuery = await pool.query(query);
    const users = userQuery.rows;
    return users;
}