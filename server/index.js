import app from "./src/app.js"
import { connectToDatabase } from "./src/db/connect.js";


const PORT = process.env.PORT || 8000;


app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`App running on port  ${PORT}`);
})